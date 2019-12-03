import React, { Component } from 'react';
import Sortierung from '../components/Sortierung';
import Element from '../components/Element'
import contactData from '../Data/contactData.json';



class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fiveData: contactData.slice(0, 5),

        }
    }

    // cmd + d to select all the similar names

    randomHandler = () => {
        let randomNumber = parseInt(Math.random() * contactData.length)
        let randomData = contactData[randomNumber]
        this.state.fiveData.push(randomData)
        this.setState({ fiveData: this.state.fiveData })
    }

    sortByNameHandler = () => {
        let sortedData = contactData.sort((prevEl, nextEl) => {
            if (prevEl.name > nextEl.name) {
                return 1;
            } else {
                return -1;
            }
        })
        this.setState({ fiveData: sortedData })
    }

    sortByPopularity = () => {
        let sortedData = contactData.sort((prevEl, nextEl) => {
            if (prevEl.popularity < nextEl.popularity) {
                return 1;
            } else {
                return -1;
            }
        })
        this.setState({ fiveData: sortedData })
    }

    deleteHandler = (id) => {
        const items = this.state.fiveData.filter(item => item.popularity !== id);
        this.setState({ fiveData: items });
    }


render() {

    return (<div>
        <Sortierung random={this.randomHandler} sortByName={this.sortByNameHandler} sortByPopularity={this.sortByPopularity} />
        <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity Action</th>
            </tr>

            {
                this.state.fiveData.map((element) =>
                    <Element img={element.pictureUrl}
                        name={element.name}
                        popularity={element.popularity}
                        delete={()=>this.deleteHandler(element.popularity)}
                        key={this.popularity} />)

            }
            {this.state.randomData}

        </table>
    </div>);
}
}

export default ContactApp;