import React from 'react'

import Certificate from './Certificate'
import './Certificates.css'

const Certificates = () => {
  return (
    <div className="certificates section">
      <div className="container--lg">
        <h2>CERTIFICATES</h2>

        <div className="certificates__wrapper">
          <Certificate image="/certificates/Excel/Microsoft-Office-Specialist-A4.jpg" />
          <Certificate image="/certificates/Excel/Microsoft-Office-Specialist-Result.jpg" />
          <Certificate image="/certificates/Excel/Learning-Excel-Data-Analysis.jpg" />
          <Certificate image="/certificates/Web-Development/Fullstack/Succeeding-in-Web-Development-Fullstack-and-Front-End.jpg" />
          <Certificate image="/certificates/Web-Development/JavaScript/JavaScript-Essential-Training-2017.jpg" />
          <Certificate image="/certificates/Web-Development/CSS/CSS-Essential-Training.jpg" />
          <Certificate image="/certificates/Programming-Foundations/Programming-Foundations-Fundamentals.jpg" />
          <Certificate image="/certificates/Programming-Foundations/Programming-Foundations-Databases.jpg" />
          <Certificate image="/certificates/Python/Learning-Python-2020.jpg" />
          <Certificate image="/certificates/Python/Programming-Essentials-in-Python.jpg" />
          <Certificate image="/certificates/UI-UX/UI-UX.jpg" />
          <Certificate image="/certificates/Graphic-Design/Graphic-Design-Foundations-Layout-and-Composition.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-1-Understanding-Networks.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-2-The-Physical-Network.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-3-The-World-of-TCPIP.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-4-Making-TCPIP-Work.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-5-Securing-TCPIP.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-6-Advanced-IP-Networking.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-7-Wireless-Virtual-Cloud-and-Mobile-Networking.jpg" />
          <Certificate image="/certificates/Network/CompTIA-Network-N10007-Cert-Prep-8-Building-a-RealWorld-Network.jpg" />
          <Certificate image="/certificates/Network/Enterprise-Networking-Security-and-Automation.jpg" />
          <Certificate image="/certificates/Cybersecurity/Introduction-to-Cybersecurity.jpg" />
          <Certificate image="/certificates/Cybersecurity/Introduction-to-Cybersecurity-DICT.jpg" />
          <Certificate image="/certificates/IoT/Introduction-to-Internet-of-Things.jpg" />
          <Certificate image="/certificates/Entrepreneurship/Evaluation-on-Entrepreneurship.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Certificates
