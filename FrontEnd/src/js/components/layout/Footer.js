import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="col-sm-5 footer-padding footer-content">
              <p>1610 RUE SAINTE-CATHERINE OUEST,</p>
              <p>MONTRÉAL, QC, H3H 2S2, CANADA</p>
              <p>514-846-0005</p>
            </div>
            <div class="col-sm-7 footer-padding footer-content">
              <p>Partner</p>
              <hr/>
              <p>Refugee Center | https://www.therefugeecentre.org/</p>
              <p>UN Refugee Angency | https://www.unhcr.ca</p>
            </div>
          </div>
          <div class="col-sm-3"></div>
      </footer>
    );
  }
}
