# Invoice Builder changelog

Every update to the Invoice Builder page is listed here, newest first. The version number also shows at the top left of the page.

## v1.17.0 — 2026-10-28

- Automatic email sending: after a one-time setup with a free Google Apps Script in your own Google account, Send now emails the invoice from your Gmail with the PDF attached. No Gmail tab, no manual attaching.
- Email sending section with step-by-step setup, a ready-to-copy script with a private key, and a Send test email button.
- The setup is saved with your encrypted records, so every computer can send once it's connected.
- Without the setup, Email still opens Gmail in your browser like before.

## v1.16.1 — 2026-10-28

- The invoice number field is labelled Auto-generated.

## v1.16.0 — 2026-10-28

- Confirmation before creating or updating an invoice, showing the number, client, email, dates, items and total.
- Confirmation before deleting an invoice or a saved client, and before starting the next invoice.
- Email an invoice from the page: set To and CC, edit the subject and message, then Open in Gmail sends it from your Gmail. Attach the downloaded PDF there.
- Each invoice records when and to whom it was emailed.
- CC emails field under Bill to, saved with each client.
- Every section of the form can be hidden or shown; hidden sections show a one-line summary. Show all / Hide all at the top. Your choice is remembered.

## v1.15.1 — 2026-10-28

- Invoice numbers are always automatic; the Auto checkbox and manual typing are removed.
- Before giving a new invoice its number, the page checks GitHub for invoices made on other computers, so two computers never use the same number.
- Each new invoice is saved to GitHub right away, before the PDF downloads.

## v1.15.0 — 2026-10-28

- New invoice number format: year, month and a running number, for example 2610-001 (October 2026, first invoice). The count starts again at 001 each month.
- The next free number is worked out from your saved invoices, so it's the same on every computer. Numbers of deleted invoices aren't reused.
- Warning before an invoice with a number that's already used replaces the old one.
- After Create invoice the number stays on that invoice; Start next invoice moves to the next number.
- Invoices you already sent keep their old numbers.

## v1.14.0 — 2026-10-28

- Invoices tab: filter by date with a calendar picker (From and To), plus quick periods: this month, last month, last 30 days, this quarter, this year and last year.
- Totals, the per-client breakdown and the invoice list all follow the selected dates.
- Average invoice amount replaces the This year box (use the This year period instead).

## v1.13.0 — 2026-10-28

- Invoices tab: totals for all invoices (total invoiced, paid, unpaid, number of invoices) and a per-client breakdown.
- Totals are saved with your records in GitHub, so every computer shows the same numbers.
- Version number and this What's new list at the top left of every page.
- Today's date and live time in Philippine time (12-hour clock) at the top right.
- CHANGELOG.md in the GitHub repo records every update.

## v1.12.0 — 2026-10-28

- Invoices and saved clients load from GitHub every time you unlock the page, even on a new computer or after the browser clears its data.
- The GitHub connection is stored inside your encrypted records, so you only connect once.
- The page asks the browser to keep its saved data.

## v1.11.0 — 2026-10-27

- Fill from a date range: adds every week (Mon–Fri) or every weekday between two dates.
- Form order now matches the invoice: Invoice, Bill to, Work items.
- Messages appear at the bottom of the screen and fade out.
- Warning when items have hours but no hourly rate.
- Bonus or discount moved into its own section.
- Short notes sit beside the totals, so an 8-week invoice fits on one page.

## v1.10.0 — 2026-10-27

- GitHub sync: invoices and saved clients are saved to the repo, encrypted with your page password.

## v1.9.0 — 2026-10-27

- Invoices tab with search, paid/unpaid filter and a preview of each invoice exactly as it was sent.

## v1.8.0 — 2026-10-27

- Create invoice button saves a record and downloads the PDF.
- Invoice history with paid/unpaid status, re-download, open to edit and delete.

## v1.7.1 — 2026-10-27

- Your name, address, phone and email are filled in by default.

## v1.7.0 — 2026-10-26

- Clearer invoice layout with labelled From and Bill to sections.
- How to pay (Wise) section with account holder, bank name, account and routing numbers.
- Option to hide the full bank details.

## v1.6.0 — 2026-10-26

- Password lock on the GitHub page, with Remember this device and a Lock button.

## v1.5.0 — 2026-10-26

- Bank details pre-filled; removed the Pay via line.

## v1.4.0 — 2026-10-26

- Work items can be a week, a single day, or a description with no date.
- Saved clients.

## v1.3.0 — 2026-10-26

- GitHub Pages version with backup and restore of your details.

## v1.2.0 — 2026-10-26

- Hours are optional: bill a flat amount per week instead.

## v1.1.0 — 2026-10-26

- Invoice numbers are created automatically from the issue date and client initials.

## v1.0.0 — 2026-10-26

- First version: invoice form, live preview and PDF download.
