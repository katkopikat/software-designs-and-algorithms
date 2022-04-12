import type { Image, User, Account, Payment } from '../../../types';
import type { Row } from '../../components';

const findByUserId = <T>(arr: T[], userID: string): T => {
    return arr.find((el: any) => el.userID === userID);
};

const dateComparator = (date1: string, date2: string): number => new Date(date2).getTime() - new Date(date1).getTime();

const sortPaymentByDate = (payments: Payment[]): Payment[] =>
    payments.sort((payment1: Payment, payment2: Payment) => dateComparator(payment2.date, payment1.date));

const getLastPayment = payments => payments[payments.length - 1]?.totalSum;

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] =>
    users.reduce<Row[]>((rows, user) => {
        const { userID, username, country, name } = user;
        const avatar = findByUserId(images, userID)?.url || '';
        const { payments, posts } = findByUserId(accounts, userID);

        const lastPayments = getLastPayment(sortPaymentByDate(payments)) || 0;

        rows.push({
            avatar,
            username,
            country,
            name,
            lastPayments,
            posts,
        });

        return rows;
    }, []);
