export type DemoUser = {
  email: string;
  name: string;
};

const demoAccounts: Record<string, DemoUser> = {
  'sathwik@gmail.com': { email: 'sathwik@gmail.com', name: 'Dr. Sathwik' },
  'madhurima@gmail.com': { email: 'madhurima@gmail.com', name: 'Dr. Madhurima' },
  'sairampragney@gmail.com': { email: 'sairampragney@gmail.com', name: 'Dr. Sairam Pragney' },
};

let currentUser: DemoUser | null = null;

export const auth = {
  login: (email: string): DemoUser | null => {
    const user = demoAccounts[email];
    if (user) {
      currentUser = user;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('drishti_user', JSON.stringify(user));
      }
      return user;
    }
    return null;
  },
  signup: (email: string, name: string): DemoUser => {
    const user = { email, name };
    demoAccounts[email] = user;
    currentUser = user;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('drishti_user', JSON.stringify(user));
    }
    return user;
  },
  logout: () => {
    currentUser = null;
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('drishti_user');
    }
  },
  getCurrentUser: (): DemoUser | null => {
    if (!currentUser && typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('drishti_user');
      if (stored) currentUser = JSON.parse(stored);
    }
    return currentUser;
  },
  isAuthenticated: (): boolean => !!auth.getCurrentUser(),
};
