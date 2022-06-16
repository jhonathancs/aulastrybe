class TimeHelper {

    public ID: string = '10';

    public static now(){
        return new Date().toLocaleDateString("pt-br");
    }

    public static addDays(date: Date, days: number) {
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString("pt-br");
    }
}

const dataHoje = TimeHelper.now();
const dataHojeMaisDezdias = TimeHelper.addDays(new Date(), 30); 

console.log(TimeHelper.ID);
