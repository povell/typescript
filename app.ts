interface ITotalPrice {
    price: number;
    discount: number;
    isInstallment: boolean;
    months: number;
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPrice): number => {
    let res = price;
    if (discount > 0) {
        res = res - (Math.round(res/100 * discount));
    }
    if (isInstallment) {
        res = Math.round(res/months);
    }
    return res;
};

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });