"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TaxCompliancePage() {
    const subServices = [
        {
            title: "THE NIGERIA TAX REFORM ACT – Our Advisory Service",
            description: "The Nigeria Tax Reform Acts represent a fundamental shift in how taxation is administered, enforced, and interpreted in Nigeria. Beyond compliance, the reforms introduce new expectations around transparency, documentation, economic substance, and proactive engagement with tax authorities. Our advisory service is designed to help businesses, investors, NGOs, and individuals understand the real impact of the reforms on their operations and decisions, identify areas of exposure early, and implement practical solutions that are compliant, defensible, and commercially sound. We work closely with clients to translate the reforms into clear actions, ensuring they are well-positioned to manage risk, preserve value, and operate with confidence under the new tax regime."
        },
        {
            title: "Corporate Tax Management (CIT, PPT, ETD)",
            description: "At TAC, we provide comprehensive corporate tax planning, management & advisory services to clients in all areas of the economy, ensuring compliance obligations and tax efficiency. Our customised Tax automated system and AI Tax support tools assist in ensuring accurate tax computations that align with the company's Audited Financial Statements and facilitate speedy response and collection of the company's tax clearance certificate.",
            details: [
                "Detailed review of the company's business model, revenue streams, and operational structure to identify tax risks, inefficiencies, and planning opportunities.",
                "Preparation and filing of annual Company Income Tax (CIT) returns in line with applicable tax laws and the Nigeria Tax Reform Acts 2025.",
                "Reconciliation of tax computations with Audited Financial Statements to ensure consistency and reduce audit exposure.",
                "Processing and follow-up on Company Income Tax Clearance Certificates, including resolution of issues that may delay issuance.",
                "Review and response to tax queries, desk reviews, and correspondence arising from filed returns.",
                "Representation and liaison with the Nigeria Revenue Service (NRS) during tax audits, investigations, reconciliations, and post-filing reviews.",
                "Continuous monitoring of tax law changes and regulatory updates, with practical guidance on how these affect the company's operations."
            ]
        },
        {
            title: "Business Transactions Tax (E-invoicing, VAT, WHT)",
            description: "We support clients in managing transaction-based taxes arising from daily business activities, with a strong focus on accuracy, documentation, and audit readiness under the new tax regime.",
            details: [
                "Comprehensive assessment of invoicing processes, ERP systems, and accounting platforms to determine readiness for e-invoicing.",
                "Mapping of invoicing workflows to NRS e-invoicing and TaxPro Max requirements.",
                "Advisory on ERP and accounting system configuration or integration via approved APIs or upload mechanisms.",
                "Review and restructuring of invoice formats to comply with prescribed XML/JSON schemas.",
                "Validation of mandatory invoice information, including TINs, VAT details, invoice reference numbers, QR codes, currency codes, and tax classifications.",
                "Guidance on internal controls, invoice approval workflows, and document retention policies.",
                "Periodic post-submission reviews to identify errors, omissions, or inconsistencies.",
                "Support during reviews or audits arising from e-invoicing submissions."
            ]
        },
        {
            title: "Transfer Pricing",
            description: "Practical transfer pricing advisory and compliance services aligned with the strengthened enforcement framework. Includes review of related-party transactions, development of transfer pricing policies, preparation of documentation, and support during audits."
        },
        {
            title: "Personal Income Tax Administration",
            description: "Efficient management of employee tax obligations ensuring employees pay minimum tax possible. Includes PAYE administration, structuring employees' pay in tax-efficient manner, processing annual tax forms, and obtaining tax clearance certificates."
        },
        {
            title: "Other Tax Management Services",
            description: "Processing of Economic Development Incentive Certificate, Common Reporting Standard (CRS) Management, Country-by-Country Reporting (CbCR), Strategic Tax Planning & Tax Health Checks, Tax Audit Management, Payroll Restructuring, Stamp Duties Support, and Immigration Support Service."
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-foreground/5 via-background to-background dark:from-tac-dark dark:via-tac-dark dark:to-background">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Link>
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">
                            Service #3
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            Tax Compliance & Advisory Service
                        </h1>
                        
                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/service/3.jpg"
                                alt="Tax Compliance & Advisory"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 relative bg-background/50">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-12 rounded-[3rem] bg-white/80 dark:bg-foreground/5 shadow-lg"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                TAC Tax Advisory Services provide comprehensive taxation planning, management & advisory services to corporate and individual clients with the aim of minimizing their tax burden through careful tax planning. Using our expertise and skill, we study and take advantage of loopholes in the tax laws to reduce clients' tax liabilities.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                In meeting with the global demand of delivering the best professional services to our numerous clients, the company ensures that all its staff are adequately empowered and updated with the current laws & statues and practical approach on tax planning & management services through sound training, seminars & courses obtained both locally & internationally.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Our customized Tax automated system and AI Tax support tools, gives us a good standing in delivering efficient and effective Tax compliance & Advisory services to our numerous clients.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">THE NIGERIA TAX REFORM ACT – OUR ADVISORY SERVICE</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                The Nigeria Tax Reform Acts represent a fundamental shift in how taxation is administered, enforced, and interpreted in Nigeria. Beyond compliance, the reforms introduce new expectations around transparency, documentation, economic substance, and proactive engagement with tax authorities.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Our advisory service is designed to help businesses, investors, NGOs, and individuals understand the real impact of the reforms on their operations and decisions, identify areas of exposure early, and implement practical solutions that are compliant, defensible, and commercially sound.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                We work closely with clients to translate the reforms into clear actions, ensuring they are well-positioned to manage risk, preserve value, and operate with confidence under the new tax regime.
                            </p>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">CORPORATE TAX MANAGEMENT (CIT, PPT EDT)</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                At TAC, we provide comprehensive corporate tax planning, management & advisory services to clients in all areas of the economy, ensuring compliance obligations and tax efficiency. Our customized Tax automated system and AI Tax support tools assist in ensuring accurate tax computations that align with the company's Audited Financial Statements and facilitate speedy response and collection of the company's tax clearance certificate.
                            </p>
                            <p className="text-foreground font-semibold mb-4">Our major corporate tax management includes:</p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Detailed review of the company's business model, revenue streams, and operational structure to identify tax risks, inefficiencies, and planning opportunities.</li>
                                <li className="text-muted-foreground leading-relaxed">Preparation and filing of annual Company Income Tax (CIT) returns in line with applicable tax laws and the Nigeria Tax Reform Acts 2025.</li>
                                <li className="text-muted-foreground leading-relaxed">Reconciliation of tax computations with Audited Financial Statements to ensure consistency and reduce audit exposure.</li>
                                <li className="text-muted-foreground leading-relaxed">Processing and follow-up on Company Income Tax Clearance Certificates, including resolution of issues that may delay issuance.</li>
                                <li className="text-muted-foreground leading-relaxed">Review and response to tax queries, desk reviews, and correspondence arising from filed returns.</li>
                                <li className="text-muted-foreground leading-relaxed">Representation and liaison with the Nigeria Revenue Service (NRS) during tax audits, investigations, reconciliations, and post-filing reviews.</li>
                                <li className="text-muted-foreground leading-relaxed">Continuous monitoring of tax law changes and regulatory updates, with practical guidance on how these affect the company's operations.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">E-INVOICING SUPPORT SERVICES</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Our e-invoicing services help clients align invoicing and accounting processes with NRS requirements under the technology-driven tax administration framework introduced by the Nigeria Tax Reform Acts.
                            </p>
                            <p className="text-foreground font-semibold mb-4">Aspects of our E-Invoice support services include:</p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Comprehensive assessment of invoicing processes, ERP systems, and accounting platforms to determine readiness for e-invoicing.</li>
                                <li className="text-muted-foreground leading-relaxed">Mapping of invoicing workflows to NRS e-invoicing and TaxPro Max requirements.</li>
                                <li className="text-muted-foreground leading-relaxed">Advisory on ERP and accounting system configuration or integration via approved APIs or upload mechanisms.</li>
                                <li className="text-muted-foreground leading-relaxed">Review and restructuring of invoice formats to comply with prescribed XML/JSON schemas.</li>
                                <li className="text-muted-foreground leading-relaxed">Validation of mandatory invoice information, including TINs, VAT details, invoice reference numbers, QR codes, currency codes, and tax classifications.</li>
                                <li className="text-muted-foreground leading-relaxed">Guidance on internal controls, invoice approval workflows, and document retention policies.</li>
                                <li className="text-muted-foreground leading-relaxed">Periodic post-submission reviews to identify errors, omissions, or inconsistencies.</li>
                                <li className="text-muted-foreground leading-relaxed">Support during reviews or audits arising from e-invoicing submissions.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">VALUE ADDED TAX (VAT) SERVICES</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We assist clients in managing VAT obligations across domestic, offshore, and cross-border transactions. This includes:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Review of VATable income streams to confirm proper classification, charging, and collection of VAT.</li>
                                <li className="text-muted-foreground leading-relaxed">Assessment of VAT treatment on offshore contracts, imported services, and cross-border transactions.</li>
                                <li className="text-muted-foreground leading-relaxed">Review and preparation of monthly VAT returns, including reconciliation with accounting records.</li>
                                <li className="text-muted-foreground leading-relaxed">Monitoring of VAT remittances and confirmation of NRS revenue receipts.</li>
                                <li className="text-muted-foreground leading-relaxed">Identification and advisory on excess VAT credits and recoverability issues.</li>
                                <li className="text-muted-foreground leading-relaxed">Updates on VAT legislation and administrative guidance issued under the Nigeria Tax Reform Acts.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">WITHHOLDING TAX (WHT) SERVICES</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                Our withholding tax services ensure proper deduction, remittance, documentation, and recovery of credits. Our services on this cover the following, among others:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Monthly review of withholding tax records to ensure deductions are applied at the correct rates and on appropriate transactions.</li>
                                <li className="text-muted-foreground leading-relaxed">Identification of under-deductions, over-deductions, and misclassifications, with advisory on corrective actions.</li>
                                <li className="text-muted-foreground leading-relaxed">Monitoring of WHT remittances and tracking of official revenue receipts.</li>
                                <li className="text-muted-foreground leading-relaxed">WHT credit recovery support, including reconciliation of WHT credits with tax returns and follow-up with the NRS for recognition and utilisation.</li>
                                <li className="text-muted-foreground leading-relaxed">Assistance with resolving long-outstanding or disputed WHT credits.</li>
                                <li className="text-muted-foreground leading-relaxed">Advisory on WHT planning to improve cash flow and avoid double taxation.</li>
                                <li className="text-muted-foreground leading-relaxed">Updates on changes to the withholding tax regime and administrative practices.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">TRANSFER PRICING</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We provide practical transfer pricing advisory and compliance services aligned with the strengthened enforcement framework under the Nigeria Tax Reform Acts 2025. Scope of work includes:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Review of related-party transactions to assess transfer pricing risk and exposure.</li>
                                <li className="text-muted-foreground leading-relaxed">Development and review of transfer pricing policies aligned with Nigerian regulations and OECD guidelines.</li>
                                <li className="text-muted-foreground leading-relaxed">Preparation of transfer pricing documentation, including local files and disclosures.</li>
                                <li className="text-muted-foreground leading-relaxed">Review of transfer pricing implementation to ensure consistency with documented policies.</li>
                                <li className="text-muted-foreground leading-relaxed">Filing of transfer pricing declarations and annual returns.</li>
                                <li className="text-muted-foreground leading-relaxed">Support during transfer pricing audits, queries, and correspondence with the NRS.</li>
                                <li className="text-muted-foreground leading-relaxed">Ongoing updates on transfer pricing regulatory developments and enforcement trends.</li>
                                <li className="text-muted-foreground leading-relaxed">Development a contemporaneous TP documentations and benchmarking analysis</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">PERSONAL INCOME TAX ADMINISTRATION</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We assist organizations in managing employee tax obligations efficiently and compliantly. Our personal income tax administration services is to ensure that employees are subjected to the minimum tax possible in line with the personal income tax law. We assist our client in the following areas:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Assist the company on PAYE administration to ensure that maximum allowances are obtained and employees pay the minimum tax possible under the law.</li>
                                <li className="text-muted-foreground leading-relaxed">Structuring the employees' pay in the most tax-efficient manner in line with the provision of the tax laws.</li>
                                <li className="text-muted-foreground leading-relaxed">Obtain and process annual tax forms and deduction cards for staff.</li>
                                <li className="text-muted-foreground leading-relaxed">Process and obtain yearly PAYE tax clearance certificates for staff</li>
                                <li className="text-muted-foreground leading-relaxed">Monitor & ensure that the company remit monthly PAYE return to the State Internal Revenue Service</li>
                                <li className="text-muted-foreground leading-relaxed">Liaise with state tax authorities and consultants during tax audit etc</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-foreground mb-4 mt-12">OTHER TAX MANAGEMENT SERVICES</h3>
                            
                            <h4 className="text-xl font-bold text-foreground mb-3 mt-8">PROCESSING OF ECONOMIC DEVELOPMENT INCENTIVE CERTIFICATE</h4>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We advise clients on accessing and sustaining government-backed tax incentives and investment reliefs, with a focus on ongoing compliance under the reformed tax regime. Scope of work includes:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Assessment of business activities and investment plans to determine eligibility for applicable incentives.</li>
                                <li className="text-muted-foreground leading-relaxed">Advisory on structuring operations to meet incentive conditions.</li>
                                <li className="text-muted-foreground leading-relaxed">Review of sector-specific incentives applicable to manufacturing, infrastructure, agriculture, energy, and technology.</li>
                                <li className="text-muted-foreground leading-relaxed">Liaison with relevant government agencies (NIPC and NRS) and investment promotion bodies.</li>
                                <li className="text-muted-foreground leading-relaxed">Ongoing monitoring of incentive conditions to prevent claw-back or withdrawal.</li>
                                <li className="text-muted-foreground leading-relaxed">Support during reviews or audits relating to incentive utilisation.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-foreground mb-3 mt-8">COMMON REPORTING STANDARD (CRS) MANAGEMENT SERVICE</h4>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We support financial institutions and relevant entities in meeting their obligations under the Common Reporting Standard framework, as reinforced by the Nigeria Tax Reform Acts 2025. Scope of work includes:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Assessment of CRS applicability and reporting obligations.</li>
                                <li className="text-muted-foreground leading-relaxed">Review and design of CRS compliance frameworks and internal procedures.</li>
                                <li className="text-muted-foreground leading-relaxed">Assistance with customer due diligence and classification of reportable accounts.</li>
                                <li className="text-muted-foreground leading-relaxed">Preparation and review of CRS reports for submission to the NRS.</li>
                                <li className="text-muted-foreground leading-relaxed">Support with data quality reviews and remediation of reporting gaps.</li>
                                <li className="text-muted-foreground leading-relaxed">Advisory on CRS audit readiness and regulatory engagement.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-foreground mb-3 mt-8">COUNTRY-BY-COUNTRY REPORTING (CbCR) SERVICE</h4>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We assist multinational groups in meeting Country-by-Country Reporting obligations in line with Nigerian regulations and global standards. Scope of work includes:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Assessment of CbCR filing obligations and thresholds.</li>
                                <li className="text-muted-foreground leading-relaxed">Advisory on group structure and reporting responsibilities.</li>
                                <li className="text-muted-foreground leading-relaxed">Preparation and review of Country-by-Country reports.</li>
                                <li className="text-muted-foreground leading-relaxed">Coordination with group headquarters and foreign advisors to ensure consistency of data.</li>
                                <li className="text-muted-foreground leading-relaxed">Review of alignment between CbCR data, transfer pricing documentation, and financial statements.</li>
                                <li className="text-muted-foreground leading-relaxed">Support during CbCR reviews or queries raised by the NRS.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-foreground mb-3 mt-8">STRATEGIC TAX PLANNING & TAX HEALTH CHECKS</h4>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                Our tax planning and tax health check services help clients proactively identify risks and improve tax efficiency within the law. Scope of work includes:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Comprehensive review of all applicable taxes to identify compliance gaps and exposure areas.</li>
                                <li className="text-muted-foreground leading-relaxed">Independent assessment of filed tax returns, accounting treatments, and supporting documentation.</li>
                                <li className="text-muted-foreground leading-relaxed">Evaluation of the impact of the Nigeria Tax Reform Acts 2025 on existing structures, contracts, and transactions.</li>
                                <li className="text-muted-foreground leading-relaxed">Identification of opportunities to optimize effective tax rates and cash flow.</li>
                                <li className="text-muted-foreground leading-relaxed">Review of cross-border transactions, withholding tax exposure, and transfer pricing risks.</li>
                                <li className="text-muted-foreground leading-relaxed">Strengthening of tax documentation, internal controls, and governance frameworks.</li>
                                <li className="text-muted-foreground leading-relaxed">Pre-audit reviews to reduce exposure before formal NRS examinations.</li>
                                <li className="text-muted-foreground leading-relaxed">Clear reporting of findings and recommended actions to management.</li>
                            </ul>

                            <h4 className="text-xl font-bold text-foreground mb-3 mt-8">OTHER TAX ADVISORY AND REGULATORY SERVICES</h4>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                                We also render tax advisory services to clients as the need arises. Our tax advisory services include but not limited to the following:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-8 ml-4">
                                <li className="text-muted-foreground leading-relaxed">Tax Audit Management Service by NRS and State Tax Authorities</li>
                                <li className="text-muted-foreground leading-relaxed">Payroll Restructuring & Management Services</li>
                                <li className="text-muted-foreground leading-relaxed">Tax Planning and Advisory Services</li>
                                <li className="text-muted-foreground leading-relaxed">Stamp Duties Support and Review</li>
                                <li className="text-muted-foreground leading-relaxed">Tax implication on implementation of contracts and other services</li>
                                <li className="text-muted-foreground leading-relaxed">Tax Ombudsman Liaising Support</li>
                                <li className="text-muted-foreground leading-relaxed">Double Taxation Agreement Processing and Review</li>
                                <li className="text-muted-foreground leading-relaxed">Offshore and Onshore Contract Agreement Tax implication effect</li>
                                <li className="text-muted-foreground leading-relaxed">Immigration Support Service</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-tac-brand">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-tac-dark mb-8">
                            Ready to get started?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
