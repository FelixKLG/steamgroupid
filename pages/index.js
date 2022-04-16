import Head from 'next/head';
import ReactDOM from 'react-dom';
import Script from 'next/script';

export default function Home() {
    const getID = async event => {
        event.preventDefault();

        const res = await fetch(`/api/fetch/${event.target.slug.value}`, {
            method: 'GET',
        });

        const result = await res.json();
        const idReturnField = document.getElementById("idReturnField")
        ReactDOM.render(result.groupId, idReturnField);

    }

    return (
        <>
            <Head>
                <title>Steam Group ID</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Script async defer data-website-id="b085d95c-9868-424f-b611-d941c7172c52" src="https://aly.felixklg.dev/VwDrVUy9RFqbFd6.js"></Script>

            <div className={'flex flex-row justify-center items-center w-screen bg-black min-h-screen'}>
                <div className={'text-center text-white'}>
                    <div className={'font-bold text-2xl p-5'}>
                        Enter your Steam group slug.
                    </div>
                    <div>
                        <form onSubmit={getID}>
                            <input id='slug'
                                   className={'w-20 p-2 border-2 border-gray-300 rounded-2xl bg-black text-center'}
                                   required/>
                            <button type={'submit'}
                                    className={'w-20 p-2 border-2 border-gray-300 rounded-2xl bg-black text-center'}>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div id={'idReturnField'} className={'text-center text-white p-5'}>

                    </div>
                </div>
            </div>
        </>
    )
}