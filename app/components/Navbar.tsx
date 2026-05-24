"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CircleDot, ArrowLeft } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            
            <div className="nav-container">
            
                <Link href="/" className="nav-brand">
                    Dr. Krushna's Homeopathy Clinic
                </Link>

                <button 
                    className="nav-toggler"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                </button>

                <div className={`nav-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#services" className="nav-link">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="/appointment" className="nav-appointment-btn">
                        📅 Book Appointment
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;