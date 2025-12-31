# Product Brochures

Place your product brochure PDF files in this directory.

## File Naming Convention

Name your brochure files to match the product slugs:
- `superplasticizer-admixture.pdf`
- `crystalline-waterproofing.pdf`
- `concrete-repair-mortar.pdf`
- `epoxy-coating.pdf`
- etc.

## How to Add Brochures

1. Add your PDF brochure files to this folder
2. Update the `brochureUrl` field in `lib/products.ts` for each product:
   ```typescript
   brochureUrl: '/brochures/your-product-name.pdf',
   ```

The download button will automatically appear on product pages when a brochure URL is provided.

