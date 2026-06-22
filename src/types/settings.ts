export interface SiteSettings {
  hero_title: string;
  hero_subtitle: string;
  teachers_title: string;
  reviews_title: string;
  pricing_title: string;
  application_title: string;
  how_it_works_title: string;
  [key: string]: string;
}

export const DEFAULT_SETTINGS: SiteSettings = {
  hero_title: "Английский язык для амбициозных профессионалов",
  hero_subtitle:
    "Индивидуальный подход, экспертные преподаватели и измеримый результат. Онлайн и офлайн.",
  teachers_title: "Наши преподаватели",
  reviews_title: "Отзывы студентов",
  pricing_title: "Тарифы",
  application_title: "Записаться на обучение",
  how_it_works_title: "Как проходит обучение",
};
