"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { Button, cn } from "@/components/ui/Button";
import type { ProductReview } from "@/types/reviews";

type ProductReviewsGridProps = {
  averageRating: number;
  initialReviews: ProductReview[];
  pageSize: number;
  productHandle: string;
  ratingDistribution: Record<string, number>;
  total: number;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-4 w-4",
            index < rating
              ? "fill-[var(--gold)] text-[var(--gold)]"
              : "text-[var(--border)]",
          )}
        />
      ))}
    </div>
  );
}

export function ProductReviewsGrid({
  averageRating,
  initialReviews,
  pageSize,
  productHandle,
  ratingDistribution,
  total,
}: ProductReviewsGridProps) {
  const [reviews, setReviews] = useState<ProductReview[]>(initialReviews);
  const [offset, setOffset] = useState(initialReviews.length);
  const [hasMore, setHasMore] = useState(initialReviews.length < total);
  const [isLoading, setIsLoading] = useState(false);

  async function loadMore() {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/reviews/${encodeURIComponent(productHandle)}?offset=${offset}&limit=${pageSize}&sort=most-recent`,
      );
      if (!response.ok) {
        throw new Error("Unable to load more reviews.");
      }
      const data = (await response.json()) as {
        reviews: ProductReview[];
        nextOffset: number;
        hasMore: boolean;
      };
      setReviews((prev) => [...prev, ...data.reviews]);
      setOffset(data.nextOffset);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const distributionTotal =
    Object.values(ratingDistribution).reduce((sum, count) => sum + count, 0) || 1;

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="store-display text-4xl text-[var(--plum)] md:text-5xl">
            Customer reviews
          </h2>
          <p className="mt-3 text-[var(--muted)]">
            Rated{" "}
            <span className="font-semibold text-[var(--plum)]">
              {averageRating.toFixed(1)}
            </span>{" "}
            out of 5 from{" "}
            <span className="font-semibold text-[var(--plum)]">{total}</span>{" "}
            reviews.
          </p>
        </div>

        <div className="w-full max-w-sm space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = ratingDistribution[String(stars)] ?? 0;
            const percentage = (count / distributionTotal) * 100;
            return (
              <div className="flex items-center gap-3 text-sm" key={stars}>
                <span className="w-3 font-medium text-[var(--plum)]">{stars}</span>
                <Star className="h-3.5 w-3.5 text-[var(--gold)]" />
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--border)]">
                  <div
                    className="h-full rounded-full bg-[var(--gold)]"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="w-8 text-right text-[var(--muted)]">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <article
            className="rounded-[22px] border border-[var(--border)] bg-[var(--card)] p-6"
            key={review.id}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-[var(--plum)]">
                  {review.customerName}
                </p>
                <p className="text-xs text-[var(--muted)]">{review.displayDate}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <h3 className="mt-4 font-semibold text-[var(--plum)]">{review.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {review.body}
            </p>
            {review.images.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {review.images.map((src, index) => (
                  <div
                    className="relative h-20 w-20 overflow-hidden rounded-xl"
                    key={index}
                  >
                    <Image
                      alt={`Review photo ${index + 1}`}
                      className="object-cover"
                      fill
                      sizes="80px"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center">
          <Button disabled={isLoading} onClick={loadMore} variant="ghost">
            {isLoading ? "Loading..." : "Load more reviews"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
