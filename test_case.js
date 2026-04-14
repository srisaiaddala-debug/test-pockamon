import { getMostViewedFaqs } from 'someService';

jest.mock('someService', () => ({
  getMostViewedFaqs: jest.fn(),
}));

getMostViewedFaqs.mockResolvedValue([
  { faqId: '1', viewCount: 10 },
  { faqId: '2', viewCount: 5 },
]);
