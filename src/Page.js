import React, { Component } from 'react';

class Page extends Component {
    render() {
        let pageClass = 'page animated';

        if (this.props.isActive) {
            pageClass += ' slideInUp';
        } else {
            pageClass += ' slideOutDown';
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
