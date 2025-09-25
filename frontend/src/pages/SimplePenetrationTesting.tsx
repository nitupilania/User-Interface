import React, { useState } from 'react';
import SecurityScanModal from '../components/SecurityScanModal';

const SimplePenetrationTesting: React.FC = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [isSecurityScanModalOpen, setIsSecurityScanModalOpen] = useState(false);

  const handleModuleSelect = (moduleId: string) => {
    setSelectedModules(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>, moduleId: string) => {
    // Create ripple effect
    const ripple = document.createElement('div');
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    event.currentTarget.style.position = 'relative';
    event.currentTarget.style.overflow = 'hidden';
    event.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
    
    // Toggle selection
    handleModuleSelect(moduleId);
  };

  const handleButtonClick = (action: string) => {
    console.log('Action clicked:', action);
    alert(`${action} functionality coming soon!`);
  };

  const handleStartSelectedScans = () => {
    if (selectedModules.length > 0) {
      // Open the comprehensive security scan modal
      setIsSecurityScanModalOpen(true);
    } else {
      alert('Please select at least one testing module before starting the scan.');
    }
  };

  const handleSelectAll = () => {
    if (selectedModules.length === pentestModules.length) {
      setSelectedModules([]);
    } else {
      setSelectedModules(pentestModules.map(m => m.id));
    }
  };

  const pentestModules = [
    {
      id: 'recon',
      title: 'Reconnaissance',
      icon: '🔍',
      description: 'Information gathering and target enumeration',
      features: ['Network Discovery', 'Service Enumeration', 'OSINT Collection'],
      color: '#3b82f6',
      status: 'Ready'
    },
    {
      id: 'vuln-scan',
      title: 'Vulnerability Scanning',
      icon: '🎯',
      description: 'Automated vulnerability detection and assessment',
      features: ['CVE Detection', 'Misconfiguration Analysis', 'Weakness Identification'],
      color: '#f59e0b',
      status: 'Ready'
    },
    {
      id: 'web-testing',
      title: 'Web Application Testing',
      icon: '🌐',
      description: 'OWASP Top 10 and web security assessment',
      features: ['SQL Injection', 'XSS Testing', 'Authentication Bypass'],
      color: '#ef4444',
      status: 'Ready'
    },
    {
      id: 'network-testing',
      title: 'Network Penetration',
      icon: '🔌',
      description: 'Network infrastructure security testing',
      features: ['Port Scanning', 'Service Exploitation', 'Lateral Movement'],
      color: '#8b5cf6',
      status: 'Ready'
    },
    {
      id: 'social-eng',
      title: 'Social Engineering',
      icon: '👤',
      description: 'Human factor security assessment',
      features: ['Phishing Simulation', 'Pretexting', 'Physical Security'],
      color: '#06b6d4',
      status: 'Ready'
    },
    {
      id: 'reporting',
      title: 'Reporting & Analysis',
      icon: '📊',
      description: 'Comprehensive security assessment reports',
      features: ['Executive Summary', 'Technical Details', 'Remediation Guide'],
      color: '#10b981',
      status: 'Ready'
    }
  ];

  return (
    <div style={{ 
      padding: '2rem 0',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Header Section */}
      <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#dc2626',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          🔒 <span>Penetration Testing Suite</span>
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#64748b',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          lineHeight: '1.6'
        }}>
          Select security testing modules below, then launch comprehensive scans with a single click. Our automated assessment platform provides detailed vulnerability analysis and compliance reporting.
        </p>
        
        {/* Status Bar with Selection Info */}
        <div style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '12px',
          maxWidth: '800px',
          margin: '0 auto 2rem',
          boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>System Status</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>🟢 All Testing Modules Operational</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Selected Modules</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{selectedModules.length} of {pentestModules.length}</div>
            </div>
          </div>
        </div>

        {/* Selection Controls */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <button
            onClick={handleSelectAll}
            style={{
              background: selectedModules.length === pentestModules.length ? '#dc2626' : 'white',
              color: selectedModules.length === pentestModules.length ? 'white' : '#dc2626',
              border: '2px solid #dc2626',
              borderRadius: '8px',
              padding: '0.875rem 1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '0.875rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (selectedModules.length !== pentestModules.length) {
                e.currentTarget.style.background = '#dc2626';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedModules.length !== pentestModules.length) {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#dc2626';
              }
            }}
          >
            {selectedModules.length === pentestModules.length ? (
              <>🔄 Deselect All</>
            ) : (
              <>📋 Select All Modules</>
            )}
          </button>
          
          <button
            onClick={handleStartSelectedScans}
            disabled={selectedModules.length === 0}
            style={{
              background: selectedModules.length > 0 ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.875rem 2rem',
              cursor: selectedModules.length > 0 ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: selectedModules.length > 0 ? '0 4px 12px rgba(5, 150, 105, 0.3)' : 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (selectedModules.length > 0) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(5, 150, 105, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedModules.length > 0) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.3)';
              }
            }}
          >
            🚀 Launch Comprehensive Scan
            {selectedModules.length > 0 && (
              <span style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '0.25rem 0.5rem',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>
                {selectedModules.length}
              </span>
            )}
          </button>
        </div>
      </section>

      {/* Scan Configuration */}
      <section style={{ marginBottom: '2rem' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ⚙️ Scan Configuration
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                Scan Intensity
              </label>
              <select style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.875rem',
                background: 'white',
                color: '#374151',
                outline: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '12px',
                paddingRight: '2.5rem'
              }} defaultValue="quick" onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}>
                <option value="quick">🔍 Quick Scan (15-30 min)</option>
                <option value="standard">🔎 Standard Scan (1-2 hours)</option>
                <option value="deep">🔬 Deep Scan (4-8 hours)</option>
              </select>
            </div>
            
            <div>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                Target Environment
              </label>
              <select style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.875rem',
                background: 'white',
                color: '#374151',
                outline: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '12px',
                paddingRight: '2.5rem'
              }} defaultValue="development" onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}>
                <option value="development">🧪 Development</option>
                <option value="staging">🔄 Staging</option>
                <option value="production">🏭 Production (Careful)</option>
              </select>
            </div>
            
            <div>
              <label style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.5rem',
                display: 'block'
              }}>
                Report Format
              </label>
              <select style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.875rem',
                background: 'white',
                color: '#374151',
                outline: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                appearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'><path fill=\'%23666\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/></svg>")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '12px',
                paddingRight: '2.5rem'
              }} defaultValue="executive" onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}>
                <option value="executive">📊 Executive Summary</option>
                <option value="technical">📋 Technical Report</option>
                <option value="compliance">📈 Compliance Report</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Modules Grid */}
      <section>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          🛡️ Available Security Testing Modules
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#64748b',
          marginBottom: '2rem',
          fontSize: '1rem'
        }}>
          Select the security testing modules you want to include in your scan. Click on any card to add it to your scan suite.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.5rem'
        }}>
          {pentestModules.map((module) => {
            const isSelected = selectedModules.includes(module.id);
            return (
            <div
              key={module.id}
              onClick={(e) => handleCardClick(e, module.id)}
              style={{
                background: isSelected ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)' : 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                boxShadow: isSelected ? '0 8px 25px rgba(220, 38, 38, 0.3)' : '0 4px 12px rgba(0,0,0,0.1)',
                border: isSelected ? '2px solid #dc2626' : '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                color: isSelected ? 'white' : 'inherit'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = module.color;
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }
              }}
            >
              {/* Module Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {/* Selection Checkbox */}
                  <div style={{
                    position: 'relative',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer'
                  }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}} // Handled by parent click
                      style={{
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        position: 'absolute',
                        cursor: 'pointer'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '4px',
                      border: isSelected ? '2px solid #dc2626' : '2px solid #d1d5db',
                      background: isSelected ? '#dc2626' : 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: 'white',
                      transition: 'all 0.2s ease'
                    }}>
                      {isSelected && '✓'}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    background: isSelected ? 'rgba(255,255,255,0.2)' : `${module.color}15`,
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: isSelected ? '2px solid rgba(255,255,255,0.3)' : `2px solid ${module.color}30`
                  }}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#1e293b',
                      marginBottom: '0.25rem'
                    }}>
                      {module.title}
                    </h3>
                    <div style={{
                      fontSize: '0.75rem',
                      color: module.color,
                      background: `${module.color}15`,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontWeight: '600'
                    }}>
                      {module.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Selection Badge */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#dc2626',
                  color: 'white',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 8px rgba(220, 38, 38, 0.4)',
                  zIndex: 10
                }}>
                  ✓
                </div>
              )}

              {/* Description */}
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1rem',
                fontSize: '0.95rem'
              }}>
                {module.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '0.5rem'
                }}>
                  Key Features:
                </div>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {module.features.map((feature, i) => (
                    <span
                      key={i}
                      style={{
                        background: `${module.color}10`,
                        color: module.color,
                        padding: '0.25rem 0.75rem',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: `1px solid ${module.color}20`
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Security Rating and Status */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem',
                padding: '0.75rem',
                background: isSelected ? 'rgba(255,255,255,0.1)' : '#f8fafc',
                borderRadius: '8px',
                border: `1px solid ${isSelected ? 'rgba(255,255,255,0.2)' : '#e2e8f0'}`
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: isSelected ? 'rgba(255,255,255,0.8)' : '#64748b',
                    fontWeight: '500'
                  }}>
                    Risk Level:
                  </div>
                  <div style={{
                    background: module.color,
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {module.status}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: isSelected ? 'rgba(255,255,255,0.8)' : '#64748b',
                  fontWeight: '500'
                }}>
                  {isSelected ? '✓ Selected' : 'Click to select'}
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </section>

      {/* Security Guidelines & Help */}
      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            💡 Security Testing Best Practices
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎯</div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                Start Small
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.4' }}>
                Begin with 2-3 modules for your first scan to understand the process and results.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🕒</div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                Schedule Wisely
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.4' }}>
                Run comprehensive scans during maintenance windows to avoid disrupting services.
              </p>
            </div>
            
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📋</div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>
                Review Results
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: '1.4' }}>
                Carefully review all findings and prioritize fixes based on risk severity.
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => handleButtonClick('View Documentation')}
              style={{
                background: 'white',
                border: '2px solid #3b82f6',
                color: '#3b82f6',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3b82f6';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#3b82f6';
              }}
            >
              📚 Documentation
            </button>
            
            <button
              onClick={() => handleButtonClick('Contact Support')}
              style={{
                background: 'white',
                border: '2px solid #059669',
                color: '#059669',
                borderRadius: '8px',
                padding: '0.75rem 1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#059669';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#059669';
              }}
            >
              💬 Get Help
            </button>
          </div>
        </div>
      </section>

      {/* Security Scan Modal */}
      <SecurityScanModal 
        isOpen={isSecurityScanModalOpen}
        onClose={() => {
          setIsSecurityScanModalOpen(false);
          // Reset selections after modal closes
          setSelectedModules([]);
        }}
      />
    </div>
  );
};

export default SimplePenetrationTesting;