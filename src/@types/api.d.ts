declare namespace Api {
  // Base Response for all API request
  // TODO: - remove base interface ( from both backend + frontend )
  interface Base<T> {
    success: boolean;
    data: {
      type: string;
      message: string;
      data: T;
    };
  }

  interface PaginatedData<T> {
    total: string;
    rows: Array<T>;
    isLast: boolean;
  }

  // TODO: - Add API types down here
  interface Session {
    user: {
      id: number;
      email: string;
      role: string;
    };
    token: string;
  }
}
