import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {useEffect, useState} from "react";
import {getChains} from "../store/actions/creators/chains.actions";
import {useDispatch, useSelector} from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Chains from './components/Chains';

const Home: NextPage = () => {
    const dispatch = useDispatch();

    const [timerId, setTimerId] = useState<NodeJS.Timer>();
    console.log(timerId);

    useEffect(() => {
        if(!timerId){
            getChains()(dispatch);
            setTimerId(setInterval(() => {
                getChains()(dispatch);
            }, 300000));
        }

        return () => {
            if(timerId) {
                clearInterval(timerId);
            }
        }
        // NOTE: Never add timerId into dependency array, otherwise it will cause infinite loop
        // eslint-disable-next-line
    }, [dispatch]);

    const { currentChains, isLoadingChains } = useSelector((state: StoreI) => state.chainsState);

    return (
        <div className={styles.container}>
            <Head>
                <title>Subsocial</title>
            </Head>

            <main className={styles.main}>
                <Header/>
                <div>
                    <h2 style={{ color:'#eb2f96' }}>Blockchain Connections Status</h2>
                </div>
                <Chains chains={currentChains} isLoadingChains={isLoadingChains} />
            </main>

            <Footer />
        </div>
    )
}

export default Home
