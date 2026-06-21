# Storefront clone notes

This repository is the independent four-market clone. It has no Git history, private environment file, generated build state, or copied dependency tree from the source repository.

## Brand source of truth

The only brand declaration is:

`packages/shared/src/brand.ts`

It exports `BRAND_NAME = "Brand Name"`, plus lowercase and uppercase values derived from that constant. Change only `BRAND_NAME`; do not hand-edit rendered brand strings elsewhere.

Verification:

1. Set `BRAND_NAME` to a temporary value such as `Test Store`.
2. Run `pnpm typecheck && pnpm build`.
3. Check the header, footer, metadata, JSON-LD, policy pages, account/admin messages, contact messages, and order UI.
4. Restore `BRAND_NAME` to `Brand Name`.

Header, mobile-header, cart-header, and footer wordmarks use fixed-size text slots so a longer brand does not move neighbouring navigation.

## Markets and packages

- Apps: `apps/uk`, `apps/us`, `apps/ca`, `apps/au`
- Package identities: `@store/uk`, `@store/us`, `@store/ca`, `@store/au`, `@store/shared`, `@store/ui`, `@store/eslint-config`, `@store/tsconfig`
- UK remains the reference implementation when market copies differ.
- Market locale, currency, country labels, and neutral fallback domains live in each app's `src/lib/market.ts`.

## Content locations

- Products, prices, SKUs, specifications, benefits, gallery alt text: `apps/<market>/src/data/products.ts`
- Product sections, FAQs, comparisons, transformations, video cards: `apps/<market>/src/data/productSections.ts`
- Homepage content: `apps/<market>/src/data/home.ts`
- Gifts: `apps/<market>/src/data/freeGifts.ts`
- Quiz questions/categories: `apps/<market>/src/data/skincareQuiz.ts`
- Quiz recommendation logic: `apps/<market>/src/lib/skincareQuiz.ts`
- SEO FAQ content: `apps/<market>/src/data/seoFaqs.ts`
- Reviews: `apps/<market>/src/data/reviews/*.json`
- Policies: `apps/<market>/src/data/policies.ts`
- Footer menus/contact content: `apps/<market>/src/data/footer.ts` and `src/components/layout/Footer.tsx`

Product-facing static data is intentionally generic. Each market formats the placeholder price as 99.99 in its own currency and the compare price as 199.99. All 5,446 review records per market retain their IDs, dates, media references, handles, and object shape; customer names, ratings, titles, and bodies are deterministic placeholders. Non-empty review title/body lengths exactly match the source lengths.

## Assets

- Public image/video roots: `apps/<market>/public/images` and `apps/<market>/public/media`
- Full inventory: `ASSET-INVENTORY.csv`
- Retained brand-bearing filenames and technical contracts: `BRAND-EXCEPTIONS.json`

The inventory records market, relative path, format, byte size, image width/height where decodable, and SHA-256. Video files retain format, byte size, and SHA-256; dimensions are blank because no video metadata probe is bundled. Image/video bytes were compared against the source clone: 663 files checked, 0 mismatches.

Do not rename retained asset files casually. Existing route/data/media contracts intentionally reference them.

Five comma-bearing PNG filenames are also copied byte-for-byte to safe lowercase aliases (`travel-box.png`, `companion-app.png`, `comparison-mask.png`, `blue-light-therapy.png`, and `store-wordmark.png`). Source references use those aliases because local/proxy URL parsing can reject raw comma-bearing paths. Original files remain present and unchanged. Next Image serves these already-optimised static assets directly.

## Environment variables

All integrations are fail-closed and inactive with the supplied blank `.env.example`.

- `NEXT_PUBLIC_SITE_URL`: deployed market origin.
- `WEB3FORMS_ACCESS_KEY`: server-side Web3Forms key.
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: optional existing client compatibility key.
- `WEB3FORMS_RECIPIENT_EMAIL`: destination for contact submissions.
- `NEXT_PUBLIC_KLAVIYO_COMPANY_ID`: Klaviyo company ID.
- `NEXT_PUBLIC_KLAVIYO_POPUP_FORM_ID`: Klaviyo popup form ID.
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`: Microsoft Clarity project ID.
- `NEXT_PUBLIC_TAWK_PROPERTY_ID`: Tawk.to property ID.
- `NEXT_PUBLIC_TAWK_WIDGET_ID`: Tawk.to widget ID.
- `NEXT_PUBLIC_COMPANION_APP_URL`: optional companion-app URL.
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: preferred browser/server publishable key.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: legacy alternate anon key.
- `SUPABASE_SERVICE_ROLE_KEY`: server-only service-role key.
- `ADMIN_EMAILS`: comma-separated admin allowlist.
- `PLUSBASE_ORIGIN`: PlusBase store origin used by server checkout/tracking.
- `NEXT_PUBLIC_PLUSBASE_ADD_TO_CART_URL`: explicit PlusBase bridge URL.
- `PLUSBASE_MASK_PRODUCT_ID`, `PLUSBASE_MASK_VARIANT_ID`: primary placeholder-product mapping.
- `PLUSBASE_GIFT_PRODUCT_ID`, `PLUSBASE_GIFT_VARIANT_ID`: gift mapping.
- `NEXT_PUBLIC_CHECKOUT_URL`: optional configured checkout URL for compatibility helpers.

Never place the service-role key in a `NEXT_PUBLIC_*` variable. Missing PlusBase configuration returns HTTP 503 and the cart displays an unavailable message; it does not contact the source store.

## Supabase

Migrations and generated database types are retained under each market's existing Supabase directories. Before deployment:

1. Create a new Supabase project.
2. Apply migrations in filename order using the Supabase CLI or SQL editor.
3. Regenerate/verify database types if the target schema changes.
4. Configure publishable/service credentials and `ADMIN_EMAILS`.
5. Verify sign-up, callback, profile, order history, tracking persistence, and admin authorization.

## PlusBase, analytics, and support

PlusBase product/variant mappings are read in `src/lib/site.ts` and `src/app/api/checkout/prepare/route.ts`. Configure all mappings together. Checkout and tracking remain unavailable until complete.

Klaviyo, Clarity, and Tawk.to components remain under `src/components/integrations`; each checks its environment identifiers before loading an external script. Web3Forms remains in the contact API/form flow and is inert without a key.

## Before deploying the second store

1. Change `BRAND_NAME`.
2. Set real market domains in environment configuration.
3. Replace generic product/gift/quiz content and placeholder prices.
4. Configure PlusBase mappings and test real checkout in a non-production store.
5. Provision a separate Supabase project and apply migrations.
6. Configure Web3Forms, Klaviyo, Clarity, and Tawk.to with the new store's IDs.
7. Review preserved contact details, social links, addresses, and policy wording.
8. Decide whether legacy public routes should remain or receive redirects.
9. Run `pnpm install --frozen-lockfile`, `pnpm typecheck`, `pnpm lint`, and `pnpm build`.
10. Test home/product/cart/gifts/quiz/policies/contact/auth/profile/orders/admin/API/not-found flows at mobile, tablet, and desktop widths.
