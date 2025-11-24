import React from "react";
import chefClaude from '/assets/images/chef-claude.png'

export default function Header() {
    return (
        <header>
                <img src={chefClaude} alt="Chef Claude icon" />
                <h1>Chef Claude</h1>
        </header>
    )
}