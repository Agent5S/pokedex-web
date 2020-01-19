import React from 'react';
import { ListElement } from './ListElement';

export class Master extends React.Component {
    render() {
        const elements = this.props.entries.map(entry => 
            <ListElement
                changeEntry={this.props.changeEntry} 
                key={entry.entry_number}
                entry={entry}/>
        );

        return (
            <div id={this.props.id} className="master">
                {elements}
            </div>
        );
    }
}