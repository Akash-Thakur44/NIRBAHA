// NIRBAHA Student Success Prediction & Counseling System
// Application Data and Functionality

// Application data from JSON
const applicationData = {
  "system_info": {
    "name": "NIRBAHA",
    "version": "2.1.0",
    "last_updated": "2025-10-01",
    "active_students": 5,
    "total_sessions": 3,
    "active_alerts": 2
  },
  "students": [
    {
      "id": 101,
      "name": "Aarav Sharma",
      "gender": "Male",
      "grade": "Grade 9",
      "class": "9A",
      "age": 14,
      "email": "aarav.sharma@school.edu",
      "phone": "+91-9876543210",
      "parent_name": "Mr. Rajesh Sharma",
      "parent_contact": "+91-9876543211",
      "address": "123 MG Road, New Delhi",
      "average_marks": 85.2,
      "gpa": 3.8,
      "participation_rate": 88.5,
      "days_absent": 3,
      "total_days": 180,
      "attendance_rate": 98.3,
      "risk_level": "low",
      "risk_score": 0.12,
      "last_updated": "2025-10-01",
      "subjects": {
        "Mathematics": 87,
        "Science": 89,
        "English": 82,
        "Hindi": 85,
        "Social Studies": 84
      },
      "behavioral_notes": "Active participant in class discussions",
      "previous_interventions": [],
      "family_background": "Middle class, both parents working"
    },
    {
      "id": 102,
      "name": "Priya Patel",
      "gender": "Female",
      "grade": "Grade 10",
      "class": "10B",
      "age": 15,
      "email": "priya.patel@school.edu",
      "phone": "+91-8765432109",
      "parent_name": "Mrs. Meera Patel",
      "parent_contact": "+91-8765432108",
      "address": "456 Park Street, Mumbai",
      "average_marks": 92.5,
      "gpa": 4.0,
      "participation_rate": 95.0,
      "days_absent": 1,
      "total_days": 180,
      "attendance_rate": 99.4,
      "risk_level": "low",
      "risk_score": 0.05,
      "last_updated": "2025-10-01",
      "subjects": {
        "Mathematics": 95,
        "Science": 94,
        "English": 90,
        "Hindi": 92,
        "Social Studies": 89
      },
      "behavioral_notes": "Excellent student, peer mentor",
      "previous_interventions": [],
      "family_background": "Well-educated family, strong support system"
    },
    {
      "id": 103,
      "name": "Rahul Kumar",
      "gender": "Male",
      "grade": "Grade 8",
      "class": "8C",
      "age": 13,
      "email": "rahul.kumar@school.edu",
      "phone": "+91-7654321098",
      "parent_name": "Mr. Suresh Kumar",
      "parent_contact": "+91-7654321097",
      "address": "789 Gandhi Nagar, Chennai",
      "average_marks": 65.8,
      "gpa": 2.4,
      "participation_rate": 70.0,
      "days_absent": 12,
      "total_days": 180,
      "attendance_rate": 93.3,
      "risk_level": "medium",
      "risk_score": 0.45,
      "last_updated": "2025-10-01",
      "subjects": {
        "Mathematics": 62,
        "Science": 68,
        "English": 70,
        "Hindi": 65,
        "Social Studies": 64
      },
      "behavioral_notes": "Struggles with concentration, needs encouragement",
      "previous_interventions": ["Parent meeting scheduled"],
      "family_background": "Single parent household, financial constraints"
    },
    {
      "id": 104,
      "name": "Ananya Singh",
      "gender": "Female",
      "grade": "Grade 7",
      "class": "7A",
      "age": 12,
      "email": "ananya.singh@school.edu",
      "phone": "+91-6543210987",
      "parent_name": "Dr. Kavita Singh",
      "parent_contact": "+91-6543210986",
      "address": "321 Nehru Place, Bangalore",
      "average_marks": 45.2,
      "gpa": 1.8,
      "participation_rate": 45.0,
      "days_absent": 25,
      "total_days": 180,
      "attendance_rate": 86.1,
      "risk_level": "high",
      "risk_score": 0.85,
      "last_updated": "2025-10-01",
      "subjects": {
        "Mathematics": 42,
        "Science": 48,
        "English": 45,
        "Hindi": 47,
        "Social Studies": 44
      },
      "behavioral_notes": "Withdrawn, shows signs of stress",
      "previous_interventions": ["Counseling session completed", "Parent conference held"],
      "family_background": "Recent family relocation, adjustment issues"
    },
    {
      "id": 105,
      "name": "Vikram Reddy",
      "gender": "Male",
      "grade": "Grade 6",
      "class": "6B",
      "age": 11,
      "email": "vikram.reddy@school.edu",
      "phone": "+91-5432109876",
      "parent_name": "Mr. Ravi Reddy",
      "parent_contact": "+91-5432109875",
      "address": "654 Lake View, Hyderabad",
      "average_marks": 38.5,
      "gpa": 1.2,
      "participation_rate": 35.0,
      "days_absent": 35,
      "total_days": 180,
      "attendance_rate": 80.6,
      "risk_level": "high",
      "risk_score": 0.92,
      "last_updated": "2025-10-01",
      "subjects": {
        "Mathematics": 35,
        "Science": 40,
        "English": 42,
        "Hindi": 38,
        "Social Studies": 37
      },
      "behavioral_notes": "Frequent absences, academic struggles",
      "previous_interventions": ["Multiple counseling sessions", "Academic support plan", "Family meetings"],
      "family_background": "Economic challenges, health issues in family"
    }
  ],
  "ml_models": {
    "models": {
      "logistic_regression": {
        "name": "Logistic Regression",
        "accuracy": 0.87,
        "precision": 0.85,
        "recall": 0.82,
        "f1_score": 0.83,
        "status": "active"
      },
      "random_forest": {
        "name": "Random Forest",
        "accuracy": 0.91,
        "precision": 0.89,
        "recall": 0.88,
        "f1_score": 0.88,
        "status": "active"
      },
      "svm": {
        "name": "Support Vector Machine",
        "accuracy": 0.84,
        "precision": 0.83,
        "recall": 0.81,
        "f1_score": 0.82,
        "status": "inactive"
      },
      "neural_network": {
        "name": "Neural Network",
        "accuracy": 0.93,
        "precision": 0.91,
        "recall": 0.90,
        "f1_score": 0.90,
        "status": "active"
      }
    },
    "ensemble_model": {
      "name": "Ensemble Model",
      "accuracy": 0.95,
      "precision": 0.93,
      "recall": 0.92,
      "f1_score": 0.92,
      "components": ["random_forest", "neural_network", "logistic_regression"]
    }
  },
  "counseling": {
    "sessions": [
      {
        "id": "CS001",
        "student_id": 104,
        "student_name": "Ananya Singh",
        "counselor": "Dr. Meera Gupta",
        "date": "2025-09-28",
        "time": "10:00 AM",
        "duration": "45 minutes",
        "type": "Individual Counseling",
        "status": "Completed",
        "notes": "Student showed signs of anxiety about academic performance. Discussed coping strategies.",
        "follow_up_required": true,
        "next_session": "2025-10-05"
      },
      {
        "id": "CS002",
        "student_id": 105,
        "student_name": "Vikram Reddy",
        "counselor": "Dr. Meera Gupta",
        "date": "2025-09-30",
        "time": "2:00 PM",
        "duration": "60 minutes",
        "type": "Family Conference",
        "status": "Completed",
        "notes": "Met with student and parents. Discussed attendance issues and home support.",
        "follow_up_required": true,
        "next_session": "2025-10-07"
      },
      {
        "id": "CS003",
        "student_id": 103,
        "student_name": "Rahul Kumar",
        "counselor": "Ms. Priya Joshi",
        "date": "2025-10-02",
        "time": "11:30 AM",
        "duration": "30 minutes",
        "type": "Academic Support",
        "status": "Scheduled",
        "notes": "",
        "follow_up_required": false,
        "next_session": ""
      }
    ]
  },
  "alerts": {
    "alerts": [
      {
        "id": "ALT001",
        "student_id": 105,
        "student_name": "Vikram Reddy",
        "alert_type": "Urgent",
        "priority": "High",
        "message": "Student has missed 35 days of school. Immediate intervention required.",
        "created_date": "2025-10-01",
        "status": "Active",
        "assigned_to": "Dr. Meera Gupta",
        "action_taken": "Parent meeting scheduled"
      },
      {
        "id": "ALT002",
        "student_id": 104,
        "student_name": "Ananya Singh",
        "alert_type": "Academic",
        "priority": "High",
        "message": "GPA dropped below 2.0. Academic support needed.",
        "created_date": "2025-09-30",
        "status": "In Progress",
        "assigned_to": "Ms. Priya Joshi",
        "action_taken": "Tutoring sessions arranged"
      },
      {
        "id": "ALT003",
        "student_id": 103,
        "student_name": "Rahul Kumar",
        "alert_type": "Attendance",
        "priority": "Medium",
        "message": "Attendance rate below threshold. Monitor closely.",
        "created_date": "2025-09-29",
        "status": "Active",
        "assigned_to": "Ms. Priya Joshi",
        "action_taken": "Parent notification sent"
      }
    ]
  },
  "dashboard_stats": {
    "total_students": 5,
    "high_risk": 2,
    "medium_risk": 1,
    "low_risk": 2,
    "avg_attendance": 91.4,
    "avg_gpa": 2.62,
    "pending_sessions": 1,
    "active_interventions": 4
  }
};

// Application state
let currentStudents = [...applicationData.students];
let currentSection = 'dashboard';
let uploadedFiles = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupFilters();
    setupSearch();
    setupModal();
    setupTable();
    setupUpload();
    setupForms();
    setupTabs();
    
    updateDashboardMetrics();
    renderStudentsGrid();
    renderStudentsTable();
    
    // Show dashboard by default
    showSection('dashboard');
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const actionBtns = document.querySelectorAll('.action-btn[data-section]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            showSection(section);
        });
    });
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            const targetLink = document.querySelector(`.nav-link[data-section="${section}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(`${sectionName}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Initialize section-specific content
        if (sectionName === 'upload') {
            initializeUploadSection();
        } else if (sectionName === 'models') {
            initializeModelsSection();
        } else if (sectionName === 'interventions') {
            initializeInterventionsSection();
        } else if (sectionName === 'alerts') {
            initializeAlertsSection();
        }
    }
}

// Filters and Search
function setupFilters() {
    const riskFilter = document.getElementById('risk-filter');
    const gradeFilter = document.getElementById('grade-filter');
    
    if (riskFilter) {
        riskFilter.addEventListener('change', applyFilters);
    }
    
    if (gradeFilter) {
        gradeFilter.addEventListener('change', applyFilters);
    }
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            applyFilters();
        });
    }
}

function applyFilters() {
    const riskFilter = document.getElementById('risk-filter')?.value || 'all';
    const gradeFilter = document.getElementById('grade-filter')?.value || 'all';
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    
    currentStudents = applicationData.students.filter(student => {
        const matchesRisk = riskFilter === 'all' || student.risk_level === riskFilter;
        const matchesGrade = gradeFilter === 'all' || student.grade === gradeFilter;
        const matchesSearch = searchTerm === '' || 
            student.name.toLowerCase().includes(searchTerm) ||
            student.grade.toLowerCase().includes(searchTerm) ||
            student.class.toLowerCase().includes(searchTerm);
        
        return matchesRisk && matchesGrade && matchesSearch;
    });
    
    renderStudentsGrid();
    renderStudentsTable();
}

// Dashboard Metrics
function updateDashboardMetrics() {
    const stats = applicationData.dashboard_stats;
    
    document.getElementById('total-students').textContent = stats.total_students;
    document.getElementById('high-risk-count').textContent = stats.high_risk;
    document.getElementById('pending-sessions').textContent = stats.pending_sessions;
    document.getElementById('active-interventions').textContent = stats.active_interventions;
    document.getElementById('alert-count').textContent = applicationData.alerts.alerts.length;
}

// Students Grid Rendering
function renderStudentsGrid() {
    const container = document.getElementById('students-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (currentStudents.length === 0) {
        container.innerHTML = '<p class="no-results">No students found matching your criteria.</p>';
        return;
    }
    
    currentStudents.forEach(student => {
        const card = createStudentCard(student);
        container.appendChild(card);
    });
}

function createStudentCard(student) {
    const card = document.createElement('div');
    card.className = `student-card ${student.risk_level}-risk`;
    card.onclick = () => showStudentModal(student);
    
    card.innerHTML = `
        <div class="student-header">
            <h4 class="student-name">${student.name}</h4>
            <span class="risk-badge ${student.risk_level}">${student.risk_level}</span>
        </div>
        <div class="student-info">
            <div class="info-row">
                <span class="info-label">Grade:</span>
                <span class="info-value">${student.grade} ${student.class}</span>
            </div>
            <div class="info-row">
                <span class="info-label">GPA:</span>
                <span class="info-value">${student.gpa.toFixed(2)}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Attendance:</span>
                <span class="info-value">${student.attendance_rate.toFixed(1)}%</span>
            </div>
            <div class="info-row">
                <span class="info-label">Risk Score:</span>
                <span class="info-value">${(student.risk_score * 100).toFixed(0)}%</span>
            </div>
        </div>
    `;
    
    return card;
}

// Students Table
function setupTable() {
    const headers = document.querySelectorAll('.students-table th[data-sort]');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const sortField = this.dataset.sort;
            sortStudents(sortField);
        });
    });
}

function sortStudents(field) {
    const isAscending = currentStudents.length === 0 || 
        currentStudents[0][field] <= currentStudents[currentStudents.length - 1][field];
    
    currentStudents.sort((a, b) => {
        let aVal = a[field];
        let bVal = b[field];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (isAscending) {
            return bVal > aVal ? 1 : -1;
        } else {
            return aVal > bVal ? 1 : -1;
        }
    });
    
    renderStudentsTable();
}

function renderStudentsTable() {
    const tbody = document.getElementById('students-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    currentStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.grade} ${student.class}</td>
            <td>${student.gpa.toFixed(2)}</td>
            <td>${student.attendance_rate.toFixed(1)}%</td>
            <td><span class="risk-badge ${student.risk_level}">${student.risk_level}</span></td>
            <td>${(student.risk_score * 100).toFixed(0)}%</td>
            <td>${student.parent_contact}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn--sm btn--primary" onclick="showStudentModal(applicationData.students.find(s => s.id === ${student.id}))">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <button class="btn btn--sm btn--secondary" onclick="assignIntervention(${student.id})">
                        <i class="fas fa-user-md"></i> Intervene
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('student-modal');
    const closeBtn = document.getElementById('modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', hideStudentModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', hideStudentModal);
    }
    
    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            hideStudentModal();
        }
    });
}

function showStudentModal(student) {
    const modal = document.getElementById('student-modal');
    const nameElement = document.getElementById('modal-student-name');
    const bodyElement = document.getElementById('modal-body');
    
    if (!modal || !nameElement || !bodyElement) return;
    
    nameElement.textContent = `${student.name} - Student Profile`;
    
    const interventions = student.previous_interventions || [];
    const subjects = Object.entries(student.subjects).map(([subject, score]) => 
        `<div class="subject-score"><strong>${subject}:</strong> ${score}%</div>`
    ).join('');
    
    bodyElement.innerHTML = `
        <div class="student-details">
            <div class="detail-section">
                <h4>Basic Information</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Full Name</span>
                        <span class="detail-value">${student.name}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Student ID</span>
                        <span class="detail-value">${student.id}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Gender</span>
                        <span class="detail-value">${student.gender}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Age</span>
                        <span class="detail-value">${student.age} years</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Grade & Class</span>
                        <span class="detail-value">${student.grade} ${student.class}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Email</span>
                        <span class="detail-value">${student.email}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Contact Information</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Student Phone</span>
                        <span class="detail-value">${student.phone}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Parent/Guardian</span>
                        <span class="detail-value">${student.parent_name}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Parent Contact</span>
                        <span class="detail-value">${student.parent_contact}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Address</span>
                        <span class="detail-value">${student.address}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Academic Performance</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">GPA</span>
                        <span class="detail-value">${student.gpa.toFixed(2)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Average Marks</span>
                        <span class="detail-value">${student.average_marks.toFixed(1)}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Participation Rate</span>
                        <span class="detail-value">${student.participation_rate.toFixed(1)}%</span>
                    </div>
                </div>
                <div style="margin-top: 16px;">
                    <h5>Subject-wise Performance:</h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px; margin-top: 8px;">
                        ${subjects}
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Attendance Information</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Attendance Rate</span>
                        <span class="detail-value">${student.attendance_rate.toFixed(1)}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Days Absent</span>
                        <span class="detail-value">${student.days_absent} days</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Total School Days</span>
                        <span class="detail-value">${student.total_days} days</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Risk Assessment</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Risk Level</span>
                        <span class="detail-value">
                            <span class="risk-badge ${student.risk_level}">${student.risk_level.toUpperCase()} RISK</span>
                        </span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Risk Score</span>
                        <div class="risk-score-display">
                            <div class="risk-meter">
                                <div class="risk-meter-fill ${student.risk_level}" style="width: ${student.risk_score * 100}%"></div>
                            </div>
                            <span class="detail-value">${(student.risk_score * 100).toFixed(0)}%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Behavioral Notes & Background</h4>
                <p><strong>Behavioral Notes:</strong> ${student.behavioral_notes}</p>
                <p><strong>Family Background:</strong> ${student.family_background}</p>
            </div>
            
            ${interventions.length > 0 ? `
            <div class="detail-section">
                <h4>Previous Interventions</h4>
                <ul class="intervention-list">
                    ${interventions.map(intervention => `<li><i class="fas fa-arrow-right"></i> ${intervention}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <div class="detail-section">
                <h4>Quick Actions</h4>
                <div class="detail-grid">
                    <button class="btn btn--primary" onclick="assignIntervention(${student.id})">
                        <i class="fas fa-user-md"></i> Assign Intervention
                    </button>
                    <button class="btn btn--secondary" onclick="contactParents(${student.id})">
                        <i class="fas fa-phone"></i> Contact Parents
                    </button>
                    <button class="btn btn--outline" onclick="scheduleSession(${student.id})">
                        <i class="fas fa-calendar-plus"></i> Schedule Session
                    </button>
                    <button class="btn btn--outline" onclick="exportStudentReport(${student.id})">
                        <i class="fas fa-download"></i> Export Report
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideStudentModal() {
    const modal = document.getElementById('student-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Upload functionality
function setupUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const processBtn = document.getElementById('process-files');
    
    if (uploadArea && fileInput) {
        uploadArea.addEventListener('click', () => fileInput.click());
        
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#2563eb';
        });
        
        uploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '';
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '';
            const files = Array.from(e.dataTransfer.files);
            handleFileUpload(files);
        });
        
        fileInput.addEventListener('change', (e) => {
            const files = Array.from(e.target.files);
            handleFileUpload(files);
        });
    }
    
    if (processBtn) {
        processBtn.addEventListener('click', processFiles);
    }
}

function handleFileUpload(files) {
    const fileList = document.getElementById('file-list');
    const processBtn = document.getElementById('process-files');
    
    files.forEach(file => {
        if (!uploadedFiles.find(f => f.name === file.name)) {
            uploadedFiles.push(file);
            
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <div class="file-info">
                    <i class="fas fa-file-alt"></i>
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">(${(file.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button class="btn btn--sm btn--outline" onclick="removeFile('${file.name}')">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            fileList.appendChild(fileItem);
        }
    });
    
    if (processBtn) {
        processBtn.disabled = uploadedFiles.length === 0;
    }
}

function removeFile(fileName) {
    uploadedFiles = uploadedFiles.filter(f => f.name !== fileName);
    renderFileList();
    
    const processBtn = document.getElementById('process-files');
    if (processBtn) {
        processBtn.disabled = uploadedFiles.length === 0;
    }
}

function renderFileList() {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = '';
    
    uploadedFiles.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <div class="file-info">
                <i class="fas fa-file-alt"></i>
                <span class="file-name">${file.name}</span>
                <span class="file-size">(${(file.size / 1024).toFixed(1)} KB)</span>
            </div>
            <button class="btn btn--sm btn--outline" onclick="removeFile('${file.name}')">
                <i class="fas fa-trash"></i>
            </button>
        `;
        fileList.appendChild(fileItem);
    });
}

function clearFiles() {
    uploadedFiles = [];
    renderFileList();
    
    const processBtn = document.getElementById('process-files');
    if (processBtn) {
        processBtn.disabled = true;
    }
}

function processFiles() {
    const validationPanel = document.getElementById('validation-panel');
    const validationSummary = document.getElementById('validation-summary');
    const dataPreview = document.getElementById('data-preview');
    
    if (validationPanel && validationSummary && dataPreview) {
        validationPanel.style.display = 'block';
        
        validationSummary.innerHTML = `
            <div class="validation-success">
                <i class="fas fa-check-circle"></i>
                <h4>Validation Successful</h4>
                <p>All ${uploadedFiles.length} files have been validated successfully.</p>
                <ul>
                    <li>${uploadedFiles.length} files processed</li>
                    <li>No validation errors found</li>
                    <li>Data mapping completed</li>
                </ul>
            </div>
        `;
        
        dataPreview.innerHTML = `
            <h5>Data Preview</h5>
            <p>Sample data from uploaded files:</p>
            <div class="preview-table">
                <table class="students-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Grade</th>
                            <th>GPA</th>
                            <th>Attendance</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sample Student 1</td>
                            <td>Grade 9</td>
                            <td>3.5</td>
                            <td>95%</td>
                            <td><span class="status--success">Validated</span></td>
                        </tr>
                        <tr>
                            <td>Sample Student 2</td>
                            <td>Grade 8</td>
                            <td>2.8</td>
                            <td>87%</td>
                            <td><span class="status--success">Validated</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        
        const importBtn = document.getElementById('import-data');
        if (importBtn) {
            importBtn.disabled = false;
            importBtn.addEventListener('click', importData);
        }
    }
}

function importData() {
    alert('Data import successful! ' + uploadedFiles.length + ' files have been processed and student records updated.');
    
    // Clear files after import
    clearFiles();
    
    // Hide validation panel
    const validationPanel = document.getElementById('validation-panel');
    if (validationPanel) {
        validationPanel.style.display = 'none';
    }
}

function downloadTemplate(templateType) {
    alert(`Downloading ${templateType} template. The CSV template file will be downloaded to your computer.`);
}

function editMappings() {
    alert('Column mapping editor opened. You can customize field mappings before importing data.');
}

// Forms and Tabs
function setupForms() {
    const sessionForm = document.getElementById('session-form');
    
    if (sessionForm) {
        sessionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            scheduleNewSession();
        });
    }
    
    // Set minimum date to today
    const sessionDate = document.getElementById('session-date');
    if (sessionDate) {
        const today = new Date().toISOString().split('T')[0];
        sessionDate.min = today;
        sessionDate.value = today;
    }
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const targetTab = document.getElementById(`${tabName}-tab`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
}

function scheduleNewSession() {
    const formData = {
        student: document.getElementById('session-student').value,
        type: document.getElementById('session-type').value,
        counselor: document.getElementById('session-counselor').value,
        date: document.getElementById('session-date').value,
        time: document.getElementById('session-time').value,
        duration: document.getElementById('session-duration').value,
        notes: document.getElementById('session-notes').value
    };
    
    if (!formData.student || !formData.type || !formData.counselor || !formData.date || !formData.time) {
        alert('Please fill in all required fields.');
        return;
    }
    
    alert(`Session scheduled successfully!\n\nStudent: ${formData.student}\nType: ${formData.type}\nCounselor: ${formData.counselor}\nDate: ${formData.date} at ${formData.time}\nDuration: ${formData.duration} minutes`);
    
    // Reset form
    document.getElementById('session-form').reset();
    
    // Set date to today again
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('session-date').value = today;
}

// Section-specific initializations
function initializeUploadSection() {
    // Already handled in setupUpload
}

function initializeModelsSection() {
    // Models are already rendered in HTML
}

function initializeInterventionsSection() {
    // Sessions are already rendered in HTML
}

function initializeAlertsSection() {
    // Alerts are already rendered in HTML
}

// Action Functions
function assignIntervention(studentId) {
    const student = applicationData.students.find(s => s.id === studentId);
    if (student) {
        alert(`Intervention assigned for ${student.name}.\n\nA counselor will be notified immediately and appropriate support measures will be initiated based on the student's risk level.`);
        hideStudentModal();
    }
}

function contactParents(studentId) {
    const student = applicationData.students.find(s => s.id === studentId);
    if (student) {
        alert(`Parent/guardian contact initiated for ${student.name}.\n\nNotifications sent to:\n- Email: ${student.email}\n- SMS: ${student.parent_contact}\n- Parent: ${student.parent_name}`);
        hideStudentModal();
    }
}

function exportStudentReport(studentId) {
    const student = applicationData.students.find(s => s.id === studentId);
    if (student) {
        alert(`Generating comprehensive report for ${student.name}.\n\nReport includes:\n- Academic performance\n- Attendance records\n- Risk assessment\n- Intervention history\n\nReport will be available for download shortly.`);
        hideStudentModal();
    }
}

function scheduleSession(studentId) {
    const student = applicationData.students.find(s => s.id === studentId);
    if (student) {
        // Switch to interventions section and focus on scheduling
        showSection('interventions');
        
        // Pre-fill student in the form
        const studentSelect = document.getElementById('session-student');
        if (studentSelect) {
            studentSelect.value = studentId;
        }
        
        alert(`Switched to Intervention Management section.\n\nStudent ${student.name} has been pre-selected in the scheduling form.`);
        hideStudentModal();
    }
}

function addNewStudent() {
    alert('Add New Student form would open here.\n\nThis would include fields for:\n- Basic information\n- Contact details\n- Academic records\n- Family background\n- Initial risk assessment');
}

// ML Model Functions
function runPredictions() {
    const selectedModel = document.getElementById('model-select').value;
    const predictionType = document.querySelector('input[name="prediction-type"]:checked').value;
    
    const resultsPanel = document.getElementById('prediction-results');
    const resultsContent = document.getElementById('results-content');
    
    if (resultsPanel && resultsContent) {
        resultsPanel.style.display = 'block';
        
        if (predictionType === 'individual') {
            resultsContent.innerHTML = `
                <div class="prediction-result">
                    <h4>Individual Prediction Results</h4>
                    <p>Model: ${selectedModel}</p>
                    <div class="results-grid">
                        <div class="result-item">
                            <h5>Vikram Reddy (Grade 6B)</h5>
                            <div class="risk-prediction high">
                                <span class="risk-level">HIGH RISK</span>
                                <span class="risk-score">92%</span>
                            </div>
                            <p class="risk-factors">Key factors: Low attendance (80.6%), Poor academic performance (1.2 GPA)</p>
                        </div>
                        <div class="result-item">
                            <h5>Ananya Singh (Grade 7A)</h5>
                            <div class="risk-prediction high">
                                <span class="risk-level">HIGH RISK</span>
                                <span class="risk-score">85%</span>
                            </div>
                            <p class="risk-factors">Key factors: Low GPA (1.8), High absenteeism (25 days)</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            resultsContent.innerHTML = `
                <div class="prediction-result">
                    <h4>Batch Prediction Results</h4>
                    <p>Model: ${selectedModel}</p>
                    <div class="batch-summary">
                        <div class="summary-stats">
                            <div class="stat">
                                <span class="stat-label">Total Students</span>
                                <span class="stat-value">5</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">High Risk</span>
                                <span class="stat-value">2</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Medium Risk</span>
                                <span class="stat-value">1</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Low Risk</span>
                                <span class="stat-value">2</span>
                            </div>
                        </div>
                        <p>Batch prediction completed successfully. 2 students require immediate intervention.</p>
                    </div>
                </div>
            `;
        }
    }
    
    alert(`Running ${predictionType} predictions using ${selectedModel}...\n\nPrediction complete! Results are displayed below.`);
}

function exportPredictions() {
    alert('Exporting prediction results...\n\nThe results will be downloaded as a CSV file containing:\n- Student details\n- Risk scores\n- Risk levels\n- Key risk factors\n- Recommended interventions');
}

// Session Management Functions
function startSession(sessionId) {
    alert(`Starting counseling session ${sessionId}...\n\nSession interface would open with:\n- Student information\n- Session notes editor\n- Progress tracking\n- Action items`);
}

function editSession(sessionId) {
    alert(`Editing session ${sessionId}...\n\nSession editing form would open with:\n- Reschedule options\n- Counselor reassignment\n- Session type modification\n- Notes updates`);
}

function viewSessionNotes(sessionId) {
    const session = applicationData.counseling.sessions.find(s => s.id === sessionId);
    if (session) {
        alert(`Session Notes - ${session.id}\n\nStudent: ${session.student_name}\nCounselor: ${session.counselor}\nDate: ${session.date}\nType: ${session.type}\n\nNotes: ${session.notes}`);
    }
}

function scheduleFollowUp(sessionId) {
    alert(`Scheduling follow-up session for ${sessionId}...\n\nFollow-up scheduling form would open with:\n- Next available dates\n- Continued counselor assignment\n- Session focus areas\n- Progress goals`);
}

function closeSessionModal() {
    const modal = document.getElementById('session-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Alert Management Functions
function resolveAlert(alertId) {
    alert(`Resolving alert ${alertId}...\n\nAlert status updated to 'Resolved'.\nAlert removed from active monitoring.\nActions taken have been logged.`);
}

function updateAlert(alertId) {
    alert(`Updating alert ${alertId}...\n\nAlert update form would open with:\n- Status modification\n- Action tracking\n- Counselor notes\n- Next steps planning`);
}

function saveAlertSettings() {
    alert('Alert settings saved successfully!\n\nUpdated settings:\n- Attendance threshold\n- GPA threshold\n- Auto-assign preferences\n- Notification settings\n\nChanges will take effect immediately.');
}

// Utility Functions
function exportReports() {
    alert('Generating comprehensive system reports...\n\nReports include:\n- Student risk assessment summary\n- Intervention effectiveness\n- Attendance trends\n- Academic performance analytics\n\nReports will be available for download shortly.');
}

// Initialize sections on load
function initializeSection(sectionName) {
    // This is called when sections are loaded
    switch(sectionName) {
        case 'upload':
            initializeUploadSection();
            break;
        case 'models':
            initializeModelsSection();
            break;
        case 'interventions':
            initializeInterventionsSection();
            break;
        case 'alerts':
            initializeAlertsSection();
            break;
    }
}