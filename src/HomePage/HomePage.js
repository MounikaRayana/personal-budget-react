import React from 'react';
import MyChart1 from '../MyChart1/MyChart1';
import MyChart2 from '../MyChart2/MyChart2';


function HomePage() {
  return (
    <main className="container center">

        <div className="page-area">
           
            <article className="text-box">
                
                <h1 className="header-color">Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
           
            <article className="text-box">
                <h1 className="header-color">Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
           
            <article className="text-box">
                <h1 className="header-color">Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
           
            <article className="text-box">
                <h1 className="header-color">Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
                
                <button>Free</button>
            </article>
           
            <article className="text-box">
                <h1 className="header-color">Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
           
            <article className="text-box">
                <h1 className="header-color">Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
           
            <article className="text-box">
                <h1 className="header-color">Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>

            <article className="text-box">
                <h1 className="header-color">Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>

            <MyChart1/>
            <MyChart2/>
            
           
            {/* <article className="text-box">
                <h1 className="header-color">Chart</h1>
                <p>
                    <canvas id="myChart" width="400" height="400"></canvas>
                </p>
            </article> */}

        </div>

    </main>
  );
}

export default HomePage;
