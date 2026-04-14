import { getMostViewedFaqs } from 'someService';

jest.mock('someService', () => ({
  getMostViewedFaqs: jest.fn(),
}));

getMostViewedFaqs.mockResolvedValue([
  { faqId: '1', viewCount: 10 },
  { faqId: '2', viewCount: 5 },
]);


// ✅ ADD THIS
  if (url.includes('/faq/most-viewed')) {
    return Promise.resolve({
      data: [
        { faqId: '1', viewCount: 10 },
        { faqId: '2', viewCount: 5 },
      ],
    });
  }
