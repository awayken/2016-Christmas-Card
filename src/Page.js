import React, { Component } from 'react';

class Page extends Component {
    render() {
        let pageClass = 'page';
        if (this.props.isActive) {
            pageClass += ' page--activepage';
        }

        return (
            <section className={pageClass}>
                <div className="page--content">
                    {this.props.content}
                </div>

                {this.props.button}
            </section>
        );
    }
}

export default Page;
