import Head from 'next/head';
import ReactDOM from 'react-dom';
import Script from 'next/script';

export default function Home() {
    const getID = async event => {
        event.preventDefault();

        const resultField = document.getElementById("resultField")

        ReactDOM.render('Loading...', resultField);

        const res = await fetch(`/api/fetch/${event.target.slug.value}`, {
            method: 'GET',
        });

        const result = await res.json();
        result.status === 200 ? ReactDOM.render(result.groupId, resultField) : ReactDOM.render(`An error occurred: code ${result.status}`, resultField)

    }

    return (
        <>
            <Head>
                <title>Steam Group ID</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Script async defer data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_ID}
                    src={process.env.NEXT_PUBLIC_ANALYTICS_URL} />

            <div className={'flex flex-row justify-center items-center w-screen bg-black min-h-screen'}>
                <div className={'text-center text-white'}>
                    <div className={'font-bold text-2xl'}>
                        Enter your Steam group slug.
                    </div>
                    <div>
                        <form onSubmit={getID}>
                            <input id='slug'
                                   className={'w-20 p-2 border-2 border-gray-300 rounded-2xl bg-black text-center m-3'}
                                   required/>
                            <button type={'submit'}
                                    className={'w-20 p-2 border-2 border-gray-300 rounded-2xl bg-black text-center'}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className={'text-center text-white p-5'}>
                        Result:
                        <p id={'resultField'}/>
                    </div>
                </div>
            </div>
        </>
    )
}