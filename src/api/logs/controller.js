import request from 'request';
import moment from 'moment';
import util from 'util';
import logger from './../../services/logger';

export const fetchData = (req, res, next) => {
    try {
        request("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8ef07f1922ae7f33bce4bf664de82f13",
            (error, response, body) => {
                const incomingData = JSON.parse(body);
                const isPrime = checkForPrime();
                isPrime ?
                    res.status(200).json(incomingData)
                    : res.status(200).json('Date is not prime so no date')
                logger.log('info', `${util.inspect(req)} + ${util.inspect(res)}`);
            })
    } catch (error) {
        console.log(error);
        next(error)
    }
    return;
}

const checkForPrime = () => {
    const currentDay = parseInt(moment().format('DD'));
    for (let i = 2; i < currentDay; i++)
        if (currentDay % i === 0) return false;
    return true;
}