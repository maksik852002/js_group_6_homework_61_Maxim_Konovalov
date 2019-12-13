import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Countries from '../../components/Countries/Countries';
import CountryInfo from '../../components/CountryInfo/CoutryInfo';
import LeftCol from '../../components/LeftCol/LeftCol';
import RightCol from '../../components/RightCol/RightCol';
import Dummy from '../../components/Dummy/Dummy';
import CountryMap from '../../components/CountryMap/CountryMap';

class CountryList extends Component {
  state = {
    countriesName:[],
    countryInfo:[],
    borders:[],
    lat:'',
    lng:'',
  };

  async componentDidMount() {
    const response = await axios.get('/all?fields=name;alpha3Code');
    const countries = response.data;
    this.setState({countriesName:countries});
  };

  getCountryInfo = async (code) => {
    const countryInfo = [...this.state.countryInfo];
    countryInfo.splice(0 ,1);
    const response = await axios.get(`/alpha/${code}`);
    const country = response.data;
    countryInfo.push({name:country.name, population:country.population, flag:country.flag, capital:country.capital, region:country.region});
    await this.getBorders(country.borders);
    this.setState({countryInfo,lat:country.latlng[0],lng:country.latlng[1]});
  };

  getBorders = async (countryBorders) => {
    const borders = [...this.state.borders];
    borders.splice(0,borders.length);
    if (countryBorders.length>0) {
      const result = await axios.get(`/alpha?codes=${countryBorders.join(';')}`);
      this.setState({borders:result.data});
    } else {
      this.setState({borders:countryBorders});
    }
  };
  
  render () {
    const country = this.state.countryInfo[0];
    return (
      <Fragment>
        <LeftCol>
          {this.state.countriesName.map(el => (
            <Countries
              key={el.alpha3Code}
              name={el.name}
              click={() => this.getCountryInfo(el.alpha3Code)}
            />
          ))}
        </LeftCol>
        <RightCol>
          {country
            ? <Fragment>
              <CountryInfo
                  key={country.name}
                  name={country.name}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                  flag={country.flag}
                >
                  {this.state.borders.length>0 
                  ? this.state.borders.map(el => (
                    <Countries
                      key={el.alpha3Code}
                      name={el.name}
                      class={this.state.borders.length>0}
                    />
                  ))
                  : <span>none</span>}
                </CountryInfo>
                <CountryMap
                  lat={this.state.lat}
                  lng={this.state.lng}
                />
              </Fragment>
            : <Dummy/>
          }
        </RightCol>
      </Fragment>
    )
  }
};

export default CountryList;