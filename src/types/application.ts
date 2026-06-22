export interface ApplicationPayload {
  name: string;
  phone: string;
  email: string;
  plan: string;
  comment: string;
}

export interface ApplicationRecord extends ApplicationPayload {
  date: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data?: T;
  message?: string;
}
