import Chart from 'react-google-charts';
import {immigrantsData, MexicoVaccination} from './data';
import './MyChart.scss';
const blockEl = 'myChart';

const MyChart = () => {
  return (
    <div className={blockEl}>
      <div className={`${blockEl}__container-chart`}>
        <h3>Immigrants deported from US. in the last decade</h3>
        <p>
          This chart shows the number of immigrants, Mexicans, and non-Mexicans
          arrested per year since 2010. There seems to be a notorious decrement
          of arrests related to Mexican people from 2014 onwards; this is most
          likely be related to massive deportations of immigrants since that
          year. On the other hand, arrests related to Non-Mexican people have
          been incremented since the same year.
        </p>
        <Chart
          width={'100%'}
          height={300}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={immigrantsData}
          options={{
            chartArea: {width: '50%'},
            hAxis: {
              title: 'Year',
              minValue: 0,
            },
            vAxis: {
              title: 'Quantity',
            },
          }}
          legendToggle
        />
      </div>
      <hr />
      <div className={`${blockEl}__container-chart`}>
        <h3>Mexico Daily vaccination progress</h3>
        <p>
          The following chat shows the daily progress of vaccinations in Mexico
          since December 2020. We decided to show the data in this kind of chart
          because it represents it like a heatmap so for we can know, for
          instance, that from December to February, vaccination progress had the
          highest peak; hence a lot of people were vaccinated in that period.
        </p>
        <Chart
          width={'100%'}
          height={400}
          chartType="Calendar"
          loader={<div>Loading Chart</div>}
          data={MexicoVaccination}
          options={{
            calendar: {
              cellSize: 18,
              cellColor: {
                stroke: 'white',
                strokeOpacity: 0.1,
                strokeWidth: 1,
              },
              focusedCellColor: {
                stroke: 'white',
                strokeOpacity: 0.8,
                strokeWidth: 1,
              },
              monthOutlineColor: {
                stroke: 'white',
                strokeOpacity: 0.8,
                strokeWidth: 2,
              },
            },
            noDataPattern: {
              backgroundColor: '#ddd',
              color: '#ddd',
            },
            colorAxis: {minValue: 0, colors: ['#0e4429', '#237236']},
          }}
          legendToggle
        />
      </div>
    </div>
  );
};

export default MyChart;
