# Create comprehensive data structure for NIRBAHA system with expanded functionality
import json
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

# Generate more comprehensive student data
students_data = {
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
    ]
}

# Machine Learning Models Configuration
ml_models = {
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
}

# Counseling Sessions Management
counseling_sessions = {
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
            "follow_up_required": True,
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
            "follow_up_required": True,
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
            "follow_up_required": False,
            "next_session": ""
        }
    ]
}

# Alert Management System
alert_system = {
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
}

# Document Upload Templates
document_templates = {
    "templates": {
        "student_records": {
            "required_columns": [
                "student_id", "name", "grade", "class", "age", "gender",
                "attendance_rate", "gpa", "parent_contact", "address"
            ],
            "optional_columns": [
                "behavioral_notes", "family_background", "previous_interventions"
            ],
            "file_formats": ["CSV", "XLSX", "JSON"]
        },
        "academic_data": {
            "required_columns": [
                "student_id", "subject", "marks", "test_date", "test_type"
            ],
            "optional_columns": [
                "participation_score", "assignment_scores", "project_marks"
            ],
            "file_formats": ["CSV", "XLSX"]
        },
        "attendance_data": {
            "required_columns": [
                "student_id", "date", "status", "reason"
            ],
            "optional_columns": [
                "time_in", "time_out", "late_minutes"
            ],
            "file_formats": ["CSV", "XLSX"]
        }
    }
}

# Create comprehensive NIRBAHA system data
nirbaha_system_data = {
    "system_info": {
        "name": "NIRBAHA",
        "version": "2.1.0",
        "last_updated": "2025-10-01",
        "active_students": len(students_data["students"]),
        "total_sessions": len(counseling_sessions["sessions"]),
        "active_alerts": len([a for a in alert_system["alerts"] if a["status"] == "Active"])
    },
    "students": students_data["students"],
    "ml_models": ml_models,
    "counseling": counseling_sessions,
    "alerts": alert_system,
    "documents": document_templates,
    "dashboard_stats": {
        "total_students": len(students_data["students"]),
        "high_risk": len([s for s in students_data["students"] if s["risk_level"] == "high"]),
        "medium_risk": len([s for s in students_data["students"] if s["risk_level"] == "medium"]),
        "low_risk": len([s for s in students_data["students"] if s["risk_level"] == "low"]),
        "avg_attendance": sum(s["attendance_rate"] for s in students_data["students"]) / len(students_data["students"]),
        "avg_gpa": sum(s["gpa"] for s in students_data["students"]) / len(students_data["students"]),
        "pending_sessions": len([s for s in counseling_sessions["sessions"] if s["status"] == "Scheduled"]),
        "active_interventions": sum(len(s["previous_interventions"]) for s in students_data["students"])
    }
}

print("NIRBAHA System Data Structure Created Successfully!")
print(f"Total Students: {nirbaha_system_data['dashboard_stats']['total_students']}")
print(f"High Risk Students: {nirbaha_system_data['dashboard_stats']['high_risk']}")
print(f"Active Alerts: {nirbaha_system_data['system_info']['active_alerts']}")
print(f"Pending Counseling Sessions: {nirbaha_system_data['dashboard_stats']['pending_sessions']}")

# Save comprehensive data
with open('nirbaha_system_data.json', 'w') as f:
    json.dump(nirbaha_system_data, f, indent=2)

print("\nData saved to 'nirbaha_system_data.json'")