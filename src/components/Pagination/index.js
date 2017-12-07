import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onPageChange = this.onPageChange.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (newProps === this.props) return;
    const { margin, page, count } = newProps;
    const startPage = page > margin ? page - margin : 1;
    const endPage = page + margin > count ? count : page + margin;
    this.setState({ startPage, endPage });
  }

  onPageChange(event) {
    const index =
      Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
    this.props.onPageChange(index + this.state.startPage);
  }

  render() {
    const { startPage, endPage } = this.state;
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li
          key={i}
          onClick={this.onPageChange}
          className="pagination-list-item"
        >
          {i}
        </li>
      );
    }

    return (
      <div id="pagination">
        <div className="">prev</div>
        <ul id="pagination-list">
          {pages}
        </ul>
        <div className="">next</div>
      </div>
    );
  }
}


export default Pagination;
