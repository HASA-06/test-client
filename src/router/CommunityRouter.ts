import AnnouncementPage from '../pages/community/AnnouncementPage.vue';
import FreeBoardPage from '../pages/community/FreeBoardPage.vue';
import QuestionAnswerPage from '../pages/community/QuestionAnswerPage.vue';
import ReviewPage from '../pages/community/ReviewPage.vue';

export default [
    {
        path: '/community/announcement',
        component: AnnouncementPage,
    },
    {
        path: '/community/free-board',
        component: FreeBoardPage,
    },
    {
        path: '/community/question-answer',
        component: QuestionAnswerPage,
    },
    {
        path: '/community/review',
        component: ReviewPage,
    },
];