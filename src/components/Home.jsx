import React, { Component } from 'react';

class Home extends Component {
    state = {}
    render() {
        return (
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-5 mt-4 p-4 border border-dark bg-light">
                        <div className='mb-4'>
                            <h2>What's happening?</h2>
                            <form class="d-flex ms-auto">
                                <input class="form-control border border-primary me-2" maxlength="140" type="search" placeholder="Tweet" aria-label="Search" />
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </form>
                        </div>
                        <div>
                            <button className='btn-outline-dark'>Timeline</button>
                            <button className='btn-outline-dark'>@Mentions</button>
                        </div>
                        <div className='border border-dark bg-white'>
                            <ol class="list-group">
                                <li class="list-group-item d-flex align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Name:</div>
                                        Content for list item
                                        <div style={{ fontSize: 10 }} className='fw-bold'>20/20/2022</div>
                                    </div>
                                    <span class="badge bg-primary rounded-pill">14</span>
                                </li>
                                <li class="list-group-item d-flex align-items-start">
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">Name:</div>
                                        Content for list item adf asdf  adsfasdf dsf daf dfa dfadf fdfadsf dsf dfsad
                                        <div style={{ fontSize: 10 }} className='fw-bold'>20/20/2022</div>
                                    </div>
                                    <span class="badge bg-primary rounded-pill">14</span>
                                </li>
                            </ol>
                        </div>

                    </div>
                    <div class="col-5 mt-4 border border-dark bg-light">
                        -
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;