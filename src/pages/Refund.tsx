import React from 'react'

export default function Refund() {
    return (
        <>
            <div className='privacypolicy_section' style={{ backgroundImage: "url('./images/card-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", alignContent: "center", backgroundAttachment: "fixed" }}>
                <div className='container'>
                    <div className='row pt-3'>
                        <div className='col-md-12 align-self-center'>
                            <p className='mb-3' style={{ fontSize: "12px", color: "#fff" }}>Last updated: Feb, 20, 2024</p>
                            <div className='heading'>
                                <h2 style={{ fontWeight: "300", color: "#fff" }}><span className='text-color'>Refund Policy</span></h2>
                            </div>
                            <div className='content'>
                                <p className='mt-1' style={{ fontSize: "14px", color: "#fff" }}>
                                    Welcome to SevenUniqueRummy . Your privacy is important to us. This Refund Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <div className='heading'>
                            <h2 className='text-center'>Refund Policy</h2>
                            <p className='text-center px-5' style={{ fontSize: "12px" }}>SevenUniqueRummy - Service Terms & Conditions</p>
                        </div>
                    </div>
                </div>
                <div className="clearfix mt-5">
                    <img src="./images/re.jpg" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" alt="policy img" />
                    <h2 className='my-3'>Eligibility for Refund</h2>
                    <p  className='mb-1 mt-3' style={{ fontSize: "14px", fontWeight: "600" }}>Refunds are only applicable under specific circumstances outlined below:</p>
                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Technical issues preventing access to services.</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Unauthorized transactions identified and reported within 7 days.</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Duplicate payments for the same as service.</p></li>
                    </ul>
                    <h2 className='my-3'> Refund Process</h2>
                    <p  className='mb-1 mt-3' style={{ fontSize: "14px", fontWeight: "600" }}>To request a refund, users must:</p>

                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Contact our support team via the provided channels.</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Submit necessary proof of purchase and explain the issue.</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Allow up to 7 business days for the refund to be processed.</p></li>
                    </ul>
                    <h2 className='my-3'> Non-Refundable Cases</h2>
                    <p  className='mb-1 mt-3' style={{ fontSize: "14px", fontWeight: "600" }}>Refunds will not be issued in the following cases:</p>

                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Change of mind after purchase.</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Violation of our terms and conditions.</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Services already utilized or consumed.</p></li>
                    </ul>
                    <h2 className='my-3'>Contact Us</h2>
                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'>If you have any questions about our refund policy, please reach out to our support team at  <a href="mailto:support@example.com" className="text-blue-500">support@SevenUniqueRummy.com</a> </p></li>
                    </ul>

                </div>

            </div>
        </>
    )
}
