import Link from 'next/link'
import React from 'react'
import classes from './eventItem.module.css';
import Button from '../ui/button';
import DateIcon from '../icons/icons/date-icon';
import addressIcon from '../icons/icons/address-icon';
import ArrowRightIcon from '../icons/icons/arrow-right-icon';
import AddressIcon from '../icons/icons/address-icon';

function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year:"numeric"
    })
    const formatedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return <li className={classes.item}>
        <img src={'/' + image} alt='' />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
            </div>
            <div className={classes.date}>
                <DateIcon/>
                <time>
                    {humanReadableDate}
                </time>
            </div>
            <div className={classes.address}>
                <AddressIcon/>
                <address>
                    {formatedAddress}
                </address>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}>
                    <span className={classes.icon}><ArrowRightIcon /></span>
                    <span>Explore Event</span>
                </Button>
            </div>
        </div>
  </li>
}

export default EventItem