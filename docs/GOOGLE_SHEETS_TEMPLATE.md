# Google Sheets CMS Template

Copy this structure into a new Google Spreadsheet. Sheet names must match exactly.

## Teachers

Row 1 (headers):
photo | name | experience | specialization | description

Example row 2:
https://images.unsplash.com/photo-teacher | Elena Petrova | 10 лет | Business English | Преподаватель с международным опытом...

## Reviews

Row 1:
name | review | rating

Example:
Maria | Отличная школа, заметный прогресс за 3 месяца. | 5

## Pricing

Row 1:
title | price | features | recommended

Example:
Standard | 15 000 ₽ / месяц | 2 занятия в неделю|Разговорная практика|Доступ к материалам | false
Premium | 25 000 ₽ / месяц | 3 занятия в неделю|IELTS-подготовка|Персональный куратор | true

## Contacts

Row 1:
phone | email | address | instagram | telegram | whatsapp

Example (single data row):
+7 (495) 123-45-67 | info@keenfort.ru | Москва, ул. Примерная, 1 | https://instagram.com/keenfort | https://t.me/keenfort | https://wa.me/79001234567

## Settings

Row 1:
key | value

Required keys:
- hero_title
- hero_subtitle
- teachers_title
- reviews_title
- pricing_title
- application_title
- how_it_works_title

## Applications

Row 1:
date | name | phone | email | plan | comment

Leave empty — filled automatically by the website form.
