# Keenfort — Commercial English School Website

Production-ready marketing website for **Keenfort** English language school. Content is managed through **Google Sheets CMS** without developer involvement.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- React Hook Form + Zod
- Google Sheets API (googleapis)
- rate-limiter-flexible, isomorphic-dompurify

## Project Structure

```
src/
├── app/                    # App Router pages, API routes, SEO files
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── layout/             # Header, Footer
│   └── sections/           # Static marketing sections
├── features/
│   ├── teachers/
│   ├── reviews/
│   ├── pricing/
│   └── application/
├── lib/
│   ├── google/             # Google Sheets integration
│   ├── validation/
│   ├── security/
│   ├── seo/
│   └── utils/
├── server/                 # Server-side services
├── types/
└── hooks/
```

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Fill in the variables (see sections below).

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Production build

```bash
npm run build
npm run start
```

## Google Sheets CMS Setup

### Step 1: Create a spreadsheet

Create a Google Spreadsheet with these sheets (exact names):

#### Teachers

| photo | name | experience | specialization | description |
|-------|------|------------|----------------|-------------|
| https://... | Anna Smith | 8 years | IELTS | ... |

#### Reviews

| name | review | rating |
|------|--------|--------|
| Ivan | Great school! | 5 |

#### Pricing

| title | price | features | recommended |
|-------|-------|----------|-------------|
| Standard | 15 000 ₽/мес | Feature 1\|Feature 2\|Feature 3 | false |
| Premium | 25 000 ₽/мес | Feature 1\|Feature 2 | true |

- `features` — pipe-separated list (`|`)
- `recommended` — `true`, `yes`, or `1`

#### Contacts

| phone | email | address | instagram | telegram | whatsapp |
|-------|-------|---------|-----------|----------|----------|
| +7... | info@... | Moscow | https://instagram.com/... | https://t.me/... | https://wa.me/... |

#### Settings

| key | value |
|-----|-------|
| hero_title | Английский язык для амбициозных профессионалов |
| hero_subtitle | Индивидуальный подход... |
| teachers_title | Наши преподаватели |
| reviews_title | Отзывы студентов |
| pricing_title | Тарифы |
| application_title | Записаться на обучение |
| how_it_works_title | Как проходит обучение |

#### Applications

| date | name | phone | email | plan | comment |
|------|------|-------|-------|------|---------|

(This sheet receives form submissions automatically.)

### Step 2: Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project (or select existing)
3. Enable **Google Sheets API**
4. Create a **Service Account**
5. Generate a JSON key
6. Copy `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
7. Copy `private_key` → `GOOGLE_PRIVATE_KEY` (keep `\n` line breaks)
8. Copy spreadsheet ID from URL → `GOOGLE_SPREADSHEET_ID`

### Step 3: Share spreadsheet

Share the spreadsheet with the service account email (Editor access).

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
SHEETS_CACHE_REVALIDATE=60
```

For Vercel production, set `NEXT_PUBLIC_SITE_URL` to your domain (e.g. `https://keenfort.ru`).

## Security

- **Zod validation** — client (React Hook Form) + server (API route)
- **DOMPurify sanitization** — name, phone, email, comment
- **Rate limiting** — 5 applications per 10 minutes per IP
- **Origin/Referer validation** — blocks cross-origin spam
- **Security headers** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **No dangerouslySetInnerHTML** — XSS-safe rendering
- **Google Sheets** — server-side only, never from browser

## SEO

- Metadata (title, description, keywords)
- Open Graph + Twitter Cards
- JSON-LD (`EducationalOrganization`)
- Auto-generated `sitemap.xml` and `robots.txt`

## Deploy to Vercel

1. Push repository to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables from `.env.example`
4. Deploy

For `GOOGLE_PRIVATE_KEY` on Vercel, paste the full key including `-----BEGIN/END-----` with literal `\n` or multiline value.

## Client Handoff Checklist

1. Transfer Git repository access
2. Transfer Vercel project ownership
3. Transfer Google Cloud project / Service Account
4. Share Google Spreadsheet (owner access for client)
5. Provide this README and `.env.example`
6. Document CMS editing rules (sheet columns, pipe-separated features)
7. Confirm domain DNS and `NEXT_PUBLIC_SITE_URL`

## Scaling Recommendations

1. **Replace in-memory rate limiter** with Redis (Upstash) for multi-instance deployments
2. **Add ISR/webhook revalidation** when Sheets content changes (Google Apps Script → `/api/revalidate`)
3. **Move media** from URL columns to Cloudinary/S3 for optimized delivery
4. **Add analytics** (Plausible/GA4) and conversion tracking on form submit
5. **Internationalization** — extract copy to Sheets or i18n files for EN/RU
6. **Monitoring** — Sentry for errors, Uptime Robot for availability
7. **Admin notifications** — Google Apps Script email on new Applications row

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint check |
| `npm run format` | Prettier format |
| `npm run typecheck` | TypeScript check |

## License

Proprietary — Keenfort. All rights reserved.
