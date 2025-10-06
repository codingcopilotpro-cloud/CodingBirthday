#!/usr/bin/env python3
"""
Tests for the Coding Birthday application
"""

import unittest
from datetime import date, datetime
from birthday import BirthdayCalculator


class TestBirthdayCalculator(unittest.TestCase):
    """Test cases for BirthdayCalculator class."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.calculator = BirthdayCalculator()
        # Mock today's date for consistent testing
        self.calculator.today = date(2024, 9, 29)  # Set a fixed date for testing
    
    def test_calculate_age(self):
        """Test age calculation."""
        # Test with date object
        birth_date = date(1990, 5, 15)
        age = self.calculator.calculate_age(birth_date)
        self.assertEqual(age, 34)
        
        # Test with string date before birthday this year
        age = self.calculator.calculate_age("1990-12-25")
        self.assertEqual(age, 33)
        
        # Test with string date after birthday this year
        age = self.calculator.calculate_age("1990-03-15")
        self.assertEqual(age, 34)
    
    def test_is_birthday_today(self):
        """Test birthday detection."""
        # Today is 2024-09-29 (mocked)
        self.assertTrue(self.calculator.is_birthday_today("1990-09-29"))
        self.assertFalse(self.calculator.is_birthday_today("1990-09-28"))
        self.assertFalse(self.calculator.is_birthday_today("1990-09-30"))
    
    def test_days_until_birthday(self):
        """Test days until birthday calculation."""
        # Birthday already passed this year (March 15)
        days = self.calculator.days_until_birthday("1990-03-15")
        # From Sept 29 to March 15 next year
        expected_days = (date(2025, 3, 15) - date(2024, 9, 29)).days
        self.assertEqual(days, expected_days)
        
        # Birthday is today
        days = self.calculator.days_until_birthday("1990-09-29")
        self.assertEqual(days, 0)
        
        # Birthday is in the future this year (December 25)
        days = self.calculator.days_until_birthday("1990-12-25")
        expected_days = (date(2024, 12, 25) - date(2024, 9, 29)).days
        self.assertEqual(days, expected_days)
    
    def test_get_birthday_message(self):
        """Test birthday message generation."""
        # Test birthday today
        message = self.calculator.get_birthday_message("John", "1990-09-29")
        self.assertIn("Happy Birthday", message)
        self.assertIn("John", message)
        self.assertIn("34", message)
        
        # Test birthday not today
        message = self.calculator.get_birthday_message("Jane", "1995-12-25")
        self.assertIn("Jane", message)
        self.assertIn("days", message)
    
    def test_get_zodiac_sign(self):
        """Test zodiac sign calculation."""
        # Test various zodiac signs
        self.assertIn("Aries", self.calculator.get_zodiac_sign("1990-04-10"))
        self.assertIn("Taurus", self.calculator.get_zodiac_sign("1990-05-10"))
        self.assertIn("Gemini", self.calculator.get_zodiac_sign("1990-06-10"))
        self.assertIn("Cancer", self.calculator.get_zodiac_sign("1990-07-10"))
        self.assertIn("Leo", self.calculator.get_zodiac_sign("1990-08-10"))
        self.assertIn("Virgo", self.calculator.get_zodiac_sign("1990-09-10"))
        self.assertIn("Libra", self.calculator.get_zodiac_sign("1990-10-10"))
        self.assertIn("Scorpio", self.calculator.get_zodiac_sign("1990-11-10"))
        self.assertIn("Sagittarius", self.calculator.get_zodiac_sign("1990-12-10"))
        self.assertIn("Capricorn", self.calculator.get_zodiac_sign("1990-01-10"))
        self.assertIn("Aquarius", self.calculator.get_zodiac_sign("1990-02-10"))
        self.assertIn("Pisces", self.calculator.get_zodiac_sign("1990-03-10"))


if __name__ == "__main__":
    unittest.main()