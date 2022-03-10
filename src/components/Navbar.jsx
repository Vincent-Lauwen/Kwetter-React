import React, { Component } from "react";
import Logo from "./../logo.svg";

class Navbar extends Component {
    state = {
        LoggedIn: true,
    };

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#"><img src={Logo} alt="" width="30" height="24" class="d-inline-block align-text-top" />Kwetter</a>
                    <button class="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex ms-auto">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            {this.GetAuthStatus()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

    GetAuthStatus() {
        if (this.state.LoggedIn) return (
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Name
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/#">Profile</a></li>
                    <li><a class="dropdown-item" href="/#">Logout</a></li>

                </ul>
            </li>);
        else {
            return (
                <li class="nav-item">
                    <a class="nav-link" href="/#">Sign in</a>
                </li>
            );
        }
    }
}

export default Navbar;
