import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SimplePenetrationTesting from './pages/SimplePenetrationTesting'
import SecurityScanModal from './components/SecurityScanModal'

// Original sophisticated layout component
function CybrtyLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isSecurityScanModalOpen, setIsSecurityScanModalOpen] = useState(false)

  // Comprehensive NIST Cybersecurity Framework Navigation Structure
  const nistFramework = {
    Identify: {
      color: '#2563eb',
      categories: [
        {
          title: 'Asset Management',
          items: [
            { label: 'IT Asset Inventory', route: '/asset-inventory', description: 'Hardware, software, and cloud asset tracking' },
            { label: 'Data Classification', route: '/data-classification', description: 'Information sensitivity and handling requirements' },
            { label: 'System Categorization', route: '/system-categorization', description: 'Critical system identification and prioritization' },
            { label: 'Network Architecture', route: '/network-architecture', description: 'Network topology and security zones' }
          ]
        },
        {
          title: 'Risk Assessment',
          items: [
            { label: 'Threat Assessment', route: '/threat-assessment', description: 'Current threat landscape analysis' },
            { label: 'Vulnerability Assessment', route: '/vulnerability-assessment', description: 'System weakness identification' },
            { label: 'Penetration Testing', route: '/penetration-testing', description: 'Simulated cyber attacks to validate security controls' },
            { label: 'Risk Analysis', route: '/risk-analysis', description: 'Business impact and likelihood analysis' },
            { label: 'Risk Register', route: '/risk-register', description: 'Centralized risk tracking and management' }
          ]
        },
        {
          title: 'Governance',
          items: [
            { label: 'Security Policies', route: '/security-policies', description: 'Organizational security policy framework' },
            { label: 'Compliance Dashboard', route: '/compliance-dashboard', description: 'Regulatory compliance tracking' },
            { label: 'Executive Dashboard', route: '/executive-dashboard', description: 'C-level security metrics and KPIs' },
            { label: 'Security Metrics', route: '/security-metrics', description: 'Performance indicators and benchmarks' }
          ]
        }
      ]
    },
    Protect: {
      color: '#059669',
      categories: [
        {
          title: 'Access Control',
          items: [
            { label: 'Identity Management', route: '/identity-management', description: 'User lifecycle and provisioning' },
            { label: 'Privileged Access', route: '/privileged-access', description: 'Administrative account management' },
            { label: 'Multi-Factor Authentication', route: '/mfa-management', description: 'Strong authentication controls' },
            { label: 'Access Reviews', route: '/access-reviews', description: 'Periodic access certification' }
          ]
        },
        {
          title: 'Data Security',
          items: [
            { label: 'Data Encryption', route: '/data-encryption', description: 'At-rest and in-transit protection' },
            { label: 'Data Loss Prevention', route: '/dlp', description: 'Sensitive data leak prevention' },
            { label: 'Backup Management', route: '/backup-management', description: 'Data backup and recovery systems' },
            { label: 'Data Governance', route: '/data-governance', description: 'Data handling and retention policies' }
          ]
        },
        {
          title: 'Infrastructure Security',
          items: [
            { label: 'Network Security', route: '/network-security', description: 'Firewall, IPS, and network controls' },
            { label: 'Endpoint Protection', route: '/endpoint-protection', description: 'Antivirus, EDR, and device security' },
            { label: 'Cloud Security', route: '/cloud-security', description: 'Cloud infrastructure and SaaS security' },
            { label: 'Security Architecture', route: '/security-architecture', description: 'Defense-in-depth design' }
          ]
        },
        {
          title: 'Awareness & Training',
          items: [
            { label: 'Security Training', route: '/security-training', description: 'Employee security awareness programs' },
            { label: 'Phishing Simulation', route: '/phishing-simulation', description: 'Social engineering testing' },
            { label: 'Training Analytics', route: '/training-analytics', description: 'Training effectiveness metrics' },
            { label: 'Certification Tracking', route: '/certification-tracking', description: 'Professional certification management' }
          ]
        },
        {
          title: 'Security Validation',
          items: [
            { label: 'Control Testing', route: '/control-testing', description: 'Security control effectiveness validation' },
            { label: 'Penetration Testing', route: '/penetration-testing', description: 'Ethical hacking and security assessment' },
            { label: 'Security Audits', route: '/security-audits', description: 'Compliance and security posture audits' },
            { label: 'Code Security Review', route: '/code-security-review', description: 'Application security testing and review' }
          ]
        }
      ]
    },
    Detect: {
      color: '#d97706',
      categories: [
        {
          title: 'Continuous Monitoring',
          items: [
            { label: 'SIEM/SOAR Platform', route: '/siem-soar', description: 'Security information and event management' },
            { label: 'Log Management', route: '/log-management', description: 'Centralized logging and analysis' },
            { label: 'Real-time Monitoring', route: '/real-time-monitoring', description: 'Live security event monitoring' },
            { label: 'Compliance Monitoring', route: '/compliance-monitoring', description: 'Regulatory requirement tracking' }
          ]
        },
        {
          title: 'Threat Detection',
          items: [
            { label: 'Threat Intelligence', route: '/threat-intelligence', description: 'External threat feeds and analysis' },
            { label: 'Anomaly Detection', route: '/anomaly-detection', description: 'Behavioral analysis and ML detection' },
            { label: 'Intrusion Detection', route: '/intrusion-detection', description: 'Network and host-based IDS' },
            { label: 'Malware Analysis', route: '/malware-analysis', description: 'Malware sandbox and reverse engineering' }
          ]
        },
        {
          title: 'Security Testing',
          items: [
            { label: 'Penetration Testing', route: '/penetration-testing', description: 'Comprehensive security testing suite' },
            { label: 'Vulnerability Scanning', route: '/vulnerability-scanning', description: 'Automated vulnerability discovery' },
            { label: 'Red Team Exercises', route: '/red-team', description: 'Advanced persistent threat simulation' },
            { label: 'Security Assessments', route: '/security-assessments', description: 'Comprehensive security reviews' }
          ]
        },
        {
          title: 'Forensics & Investigation',
          items: [
            { label: 'Digital Forensics', route: '/digital-forensics', description: 'Evidence collection and analysis' },
            { label: 'Incident Investigation', route: '/incident-investigation', description: 'Security incident deep-dive analysis' },
            { label: 'Chain of Custody', route: '/chain-of-custody', description: 'Evidence handling and documentation' },
            { label: 'Forensic Tools', route: '/forensic-tools', description: 'Investigation software and hardware' }
          ]
        }
      ]
    },
    Respond: {
      color: '#dc2626',
      categories: [
        {
          title: 'Incident Response',
          items: [
            { label: 'Incident Management', route: '/incident-management', description: 'Security incident tracking and workflow' },
            { label: 'Response Playbooks', route: '/response-playbooks', description: 'Automated response procedures' },
            { label: 'Threat Containment', route: '/threat-containment', description: 'Incident isolation and containment' },
            { label: 'Evidence Collection', route: '/evidence-collection', description: 'Incident artifacts and documentation' }
          ]
        },
        {
          title: 'Crisis Management',
          items: [
            { label: 'Crisis Communications', route: '/crisis-communications', description: 'Stakeholder notification and updates' },
            { label: 'Media Relations', route: '/media-relations', description: 'Public relations and press management' },
            { label: 'Legal Coordination', route: '/legal-coordination', description: 'Legal and regulatory notification' },
            { label: 'Executive Briefing', route: '/executive-briefing', description: 'C-level incident communication' }
          ]
        },
        {
          title: 'Response Coordination',
          items: [
            { label: 'SOC Operations', route: '/soc-operations', description: 'Security operations center management' },
            { label: 'Escalation Procedures', route: '/escalation-procedures', description: 'Incident escalation workflows' },
            { label: 'External Coordination', route: '/external-coordination', description: 'Law enforcement and vendor coordination' },
            { label: 'Response Metrics', route: '/response-metrics', description: 'Incident response KPIs and timing' }
          ]
        }
      ]
    },
    Recover: {
      color: '#8b5cf6',
      categories: [
        {
          title: 'Business Continuity',
          items: [
            { label: 'BCP Planning', route: '/bcp-planning', description: 'Business continuity plan development' },
            { label: 'Disaster Recovery', route: '/disaster-recovery', description: 'System and data recovery procedures' },
            { label: 'Recovery Testing', route: '/recovery-testing', description: 'BCP and DR plan validation' },
            { label: 'Recovery Metrics', route: '/recovery-metrics', description: 'RTO/RPO tracking and optimization' }
          ]
        },
        {
          title: 'Post-Incident',
          items: [
            { label: 'Lessons Learned', route: '/lessons-learned', description: 'Post-incident analysis and improvement' },
            { label: 'Recovery Validation', route: '/recovery-validation', description: 'System integrity verification' },
            { label: 'Stakeholder Updates', route: '/stakeholder-updates', description: 'Recovery status communication' },
            { label: 'Process Improvement', route: '/process-improvement', description: 'Security program enhancement' }
          ]
        },
        {
          title: 'Organizational Learning',
          items: [
            { label: 'Security Maturity', route: '/security-maturity', description: 'Capability maturity assessment' },
            { label: 'Performance Analytics', route: '/performance-analytics', description: 'Security program effectiveness' },
            { label: 'Benchmark Analysis', route: '/benchmark-analysis', description: 'Industry comparison and trends' },
            { label: 'Strategic Planning', route: '/strategic-planning', description: 'Future security roadmap planning' }
          ]
        }
      ]
    }
  }

  const handleNavClick = (route: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (route) {
      navigate(route)
    }
  }

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--primary-bg, #f8fafc)' }}>
      {/* Original CybrTy Header */}
      <header style={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)', 
        padding: '1rem 2rem', 
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '1.75rem', 
            fontWeight: 'bold', 
            color: '#2563eb',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}>
            🛡️ <span>Cybrty</span>
          </a>

          {/* Comprehensive NIST Navigation */}
          <nav style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            position: 'relative'
          }}>
            {/* NIST Badge */}
            <div style={{
              background: '#2563eb',
              color: '#ffffff',
              padding: '0.25rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              marginRight: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              🏆 <span>NIST CSF v2.0 ✓</span>
            </div>
            
            {/* NIST Framework Categories with Dropdowns */}
            {Object.entries(nistFramework).map(([category, config]) => (
              <div key={category} style={{ position: 'relative' }}>
                <button
                  onClick={() => handleDropdownToggle(category)}
                  style={{
                    color: '#64748b',
                    background: 'transparent',
                    border: '2px solid transparent',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = config.color
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    if (activeDropdown !== category) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#64748b'
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  {category}
                  <span style={{ fontSize: '0.75rem' }}>▼</span>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === category && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    marginTop: '0.5rem',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                    border: '1px solid #e2e8f0',
                    minWidth: '800px',
                    zIndex: 1000,
                    padding: '1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem'
                  }}>
                    {config.categories.map((categoryGroup, idx) => (
                      <div key={idx}>
                        <h4 style={{
                          color: config.color,
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          marginBottom: '0.75rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          borderBottom: `2px solid ${config.color}20`,
                          paddingBottom: '0.5rem'
                        }}>
                          {categoryGroup.title}
                        </h4>
                        {categoryGroup.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.route, e)
                              setActiveDropdown(null)
                            }}
                            style={{
                              display: 'block',
                              padding: '0.75rem',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              marginBottom: '0.5rem',
                              transition: 'all 0.2s ease',
                              border: '1px solid transparent'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = `${config.color}10`
                              e.currentTarget.style.borderColor = `${config.color}30`
                              e.currentTarget.style.transform = 'translateX(4px)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent'
                              e.currentTarget.style.borderColor = 'transparent'
                              e.currentTarget.style.transform = 'translateX(0)'
                            }}
                          >
                            <div style={{
                              color: '#1e293b',
                              fontWeight: '600',
                              fontSize: '0.875rem',
                              marginBottom: '0.25rem'
                            }}>
                              {item.label}
                            </div>
                            <div style={{
                              color: '#64748b',
                              fontSize: '0.75rem',
                              lineHeight: '1.4'
                            }}>
                              {item.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Security Scan Button */}
            <button
              onClick={() => setIsSecurityScanModalOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: '#ffffff',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)'
              }}
            >
              🚀 <span>Launch Security Scan</span>
            </button>

            {/* System Status */}
            <div style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
            }}>
              ✅ <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content with original styling */}
      <main style={{ padding: '0' }}>
        {children}
      </main>

      {/* Security Scan Modal */}
      <SecurityScanModal 
        isOpen={isSecurityScanModalOpen}
        onClose={() => setIsSecurityScanModalOpen(false)}
      />
    </div>
  )
}

function TestPage({ title, description }: { title: string; description?: string }) {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      minHeight: '80vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#2563eb', 
        marginBottom: description ? '1rem' : '2rem',
        fontWeight: 'bold'
      }}>
        🛡️ {title}
      </h1>
      
      {description && (
        <p style={{
          fontSize: '1.2rem',
          color: '#64748b',
          marginBottom: '2rem',
          maxWidth: '800px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      )}
      
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '0 auto 2rem auto'
      }}>
        <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>
          NIST Cybersecurity Framework Implementation
        </h2>
        <p style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          🟢 {title} Route: Ready for Implementation
        </p>
        <div style={{
          background: '#f0f9ff',
          border: '2px solid #0ea5e9',
          borderRadius: '8px',
          padding: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <p style={{
            color: '#0369a1',
            fontSize: '1rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            🤖 Agentic AI Implementation Ready
          </p>
          <p style={{
            color: '#64748b',
            fontSize: '0.9rem',
            lineHeight: '1.5'
          }}>
            This cybersecurity functionality is part of the comprehensive NIST Framework and will be implemented by AI agents with enterprise-grade security controls, compliance features, and automated threat response capabilities.
          </p>
        </div>
      </div>
    </div>
  )
}

function App() {
  console.log('🎯 CybrTy App with comprehensive NIST framework is rendering...')
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={
        <CybrtyLayout>
          <Dashboard />
        </CybrtyLayout>
      } />
      <Route path="/penetration-testing" element={
        <CybrtyLayout>
          <SimplePenetrationTesting />
        </CybrtyLayout>
      } />
      
      {/* NIST Framework Routes - All will be implemented by Agentic AI */}
      {/* IDENTIFY Routes */}
      <Route path="/asset-management" element={
        <CybrtyLayout>
          <TestPage title="Asset Management - NIST IDENTIFY" description="Hardware assets, software assets, external information systems, facilities, personnel" />
        </CybrtyLayout>
      } />
      <Route path="/business-environment" element={
        <CybrtyLayout>
          <TestPage title="Business Environment - NIST IDENTIFY" description="Organization's mission, objectives, stakeholders, and activities" />
        </CybrtyLayout>
      } />
      <Route path="/governance" element={
        <CybrtyLayout>
          <TestPage title="Governance - NIST IDENTIFY" description="Policies, procedures, and processes to manage and monitor regulatory, legal, risk" />
        </CybrtyLayout>
      } />
      <Route path="/risk-assessment" element={
        <CybrtyLayout>
          <TestPage title="Risk Assessment - NIST IDENTIFY" description="Organization understands cybersecurity risk to systems, assets, data, and capabilities" />
        </CybrtyLayout>
      } />
      <Route path="/risk-management-strategy" element={
        <CybrtyLayout>
          <TestPage title="Risk Management Strategy - NIST IDENTIFY" description="Organization's priorities, constraints, risk tolerances, and assumptions" />
        </CybrtyLayout>
      } />
      <Route path="/supply-chain-risk-management" element={
        <CybrtyLayout>
          <TestPage title="Supply Chain Risk Management - NIST IDENTIFY" description="Organization's priorities, constraints, risk tolerances for supply chain" />
        </CybrtyLayout>
      } />
      
      {/* PROTECT Routes */}
      <Route path="/identity-access-management" element={
        <CybrtyLayout>
          <TestPage title="Identity & Access Management - NIST PROTECT" description="Access to assets and associated facilities is limited to authorized users" />
        </CybrtyLayout>
      } />
      <Route path="/awareness-training" element={
        <CybrtyLayout>
          <TestPage title="Awareness & Training - NIST PROTECT" description="Organization's personnel and partners are provided cybersecurity awareness education" />
        </CybrtyLayout>
      } />
      <Route path="/data-security" element={
        <CybrtyLayout>
          <TestPage title="Data Security - NIST PROTECT" description="Information and records (data) are managed consistent with the organization's risk strategy" />
        </CybrtyLayout>
      } />
      <Route path="/information-protection" element={
        <CybrtyLayout>
          <TestPage title="Information Protection - NIST PROTECT" description="Information protection processes and procedures are maintained" />
        </CybrtyLayout>
      } />
      <Route path="/maintenance" element={
        <CybrtyLayout>
          <TestPage title="Maintenance - NIST PROTECT" description="Maintenance and repairs of industrial control and information system components" />
        </CybrtyLayout>
      } />
      <Route path="/protective-technology" element={
        <CybrtyLayout>
          <TestPage title="Protective Technology - NIST PROTECT" description="Technical security solutions are managed to ensure resilience of systems and assets" />
        </CybrtyLayout>
      } />
      
      {/* DETECT Routes */}
      <Route path="/anomalies-events" element={
        <CybrtyLayout>
          <TestPage title="Anomalies & Events - NIST DETECT" description="Anomalous activity is detected and the potential impact is understood" />
        </CybrtyLayout>
      } />
      <Route path="/security-monitoring" element={
        <CybrtyLayout>
          <TestPage title="Security Monitoring - NIST DETECT" description="Information system and assets are monitored to identify cybersecurity events" />
        </CybrtyLayout>
      } />
      <Route path="/detection-processes" element={
        <CybrtyLayout>
          <TestPage title="Detection Processes - NIST DETECT" description="Detection processes and procedures are maintained and tested" />
        </CybrtyLayout>
      } />
      
      {/* RESPOND Routes */}
      <Route path="/response-planning" element={
        <CybrtyLayout>
          <TestPage title="Response Planning - NIST RESPOND" description="Response processes and procedures are executed and maintained" />
        </CybrtyLayout>
      } />
      <Route path="/communications" element={
        <CybrtyLayout>
          <TestPage title="Communications - NIST RESPOND" description="Response activities are coordinated with internal and external stakeholders" />
        </CybrtyLayout>
      } />
      <Route path="/analysis" element={
        <CybrtyLayout>
          <TestPage title="Analysis - NIST RESPOND" description="Analysis is conducted to ensure effective response and support recovery activities" />
        </CybrtyLayout>
      } />
      <Route path="/mitigation" element={
        <CybrtyLayout>
          <TestPage title="Mitigation - NIST RESPOND" description="Activities are performed to prevent expansion of an event and mitigate its effects" />
        </CybrtyLayout>
      } />
      <Route path="/improvements" element={
        <CybrtyLayout>
          <TestPage title="Improvements - NIST RESPOND" description="Organizational response activities are improved by lessons learned" />
        </CybrtyLayout>
      } />
      
      {/* RECOVER Routes */}
      <Route path="/recovery-planning" element={
        <CybrtyLayout>
          <TestPage title="Recovery Planning - NIST RECOVER" description="Recovery processes and procedures are executed and maintained" />
        </CybrtyLayout>
      } />
      <Route path="/improvements-recovery" element={
        <CybrtyLayout>
          <TestPage title="Recovery Improvements - NIST RECOVER" description="Recovery planning and processes are improved by lessons learned" />
        </CybrtyLayout>
      } />
      <Route path="/communications-recovery" element={
        <CybrtyLayout>
          <TestPage title="Recovery Communications - NIST RECOVER" description="Restoration activities are coordinated with internal and external parties" />
        </CybrtyLayout>
      } />
      
      {/* Additional core routes */}
      <Route path="/executive-dashboard" element={
        <CybrtyLayout>
          <TestPage title="Executive Dashboard" description="High-level security posture and risk overview" />
        </CybrtyLayout>
      } />
      <Route path="/compliance" element={
        <CybrtyLayout>
          <TestPage title="Compliance Center" description="Regulatory compliance tracking and reporting" />
        </CybrtyLayout>
      } />
      <Route path="/vulnerabilities" element={
        <CybrtyLayout>
          <TestPage title="Vulnerabilities" description="Vulnerability assessment and management" />
        </CybrtyLayout>
      } />
      <Route path="/incidents" element={
        <CybrtyLayout>
          <TestPage title="Incidents" description="Security incident tracking and response" />
        </CybrtyLayout>
      } />
      
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App