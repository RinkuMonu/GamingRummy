import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <>
            <div className='privacypolicy_section' style={{ backgroundImage: "url('./images/card-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", alignContent: "center", backgroundAttachment: "fixed" }}>
                <div className='container'>
                    <div className='row pt-3'>
                        <div className='col-md-12 align-self-center'>
                            <p className='mb-3' style={{ fontSize: "12px", color: "#fff" }}>Last updated: Feb, 20, 2024</p>
                            <div className='heading'>
                                <h2 style={{ fontWeight: "300", color: "#fff" }}><span className='text-color'>Privacy Policy</span></h2>
                            </div>
                            <div className='content'>
                                <p className='mt-1' style={{ fontSize: "14px", color: "#fff" }}>
                                    Welcome to [SevenUniqueRummy] (referred to as “we,” “us,” or “our”). Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
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
                            <h2 className='text-center'>Privacy Policy</h2>
                            <p className='text-center px-5' style={{ fontSize: "12px" }}>Finunique Small CENTERS - Service Terms & Conditions</p>
                        </div>
                    </div>
                </div>
                <div className="clearfix mt-5">
                    <img src="./images/trem.jpg" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3" alt="policy img" />
                    <h2 className='my-3'>Information We Collect</h2>
                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Personal identification information</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Gaming activity and preferences</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Payment information</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Device and browser information</p></li>
                    </ul>
                    <h2 className='my-3'> How We Use Your Information</h2>
                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To provide and improve our services</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To process transactions</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To communicate with you</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> To ensure compliance with regulations</p></li>
                    </ul>
                    <h2 className='my-3'> Data Security</h2>
                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> We implement appropriate security measures to protect your personal information.</p></li>
                    </ul>
                    <h2 className='my-3'>Your Rights</h2>
                    <ul className='ps-3'>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Access your personal data</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Request data correction</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Request data deletion</p></li>
                        <li style={{ listStyleType: "circle" }}><p className='mb-0 mt-1'> Withdraw consent</p></li>
                    </ul>

                </div>

            </div>
        </>
    );
};