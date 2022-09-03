import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
import styles from './chart.module.css';

export default function Charts() {
    const [currentData, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setData(await FETCHDATAHERE());
        }
        setInterval(() => {
            fetchData();
        }, 1000);
    }, [])

    const pieChart = (
        currentData.length
        ? (
            <Pie>
            </Pie>
        ) : null
    )
    };