import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";

import NavbarItem from "./navbarItem";

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="/" className="navbar-brand">
          ConcessWeb
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-fabricante"
              label="Fabricantes"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem render="true" href="/listagem-modelo" label="Modelos" />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-empresa"
              label="Empresas"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-concessionaria"
              label="Concessionarias"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-item-serie"
              label="Itens séries"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-veiculo"
              label="Veículos"
            />
          </ul>
          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-vendedor"
              label="Vendedores"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-agendamento-test-drive"
              label="Test-drive"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem render="true" href="/listagem-compra" label="Compras" />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-cliente"
              label="Clientes"
            />
          </ul>

          <ul className="navbar-nav">
            <NavbarItem
              render="true"
              href="/listagem-gestor"
              label="Gestores"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
