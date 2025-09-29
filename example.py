#!/usr/bin/env python3
"""
Example usage of the BirthdayCalculator class
"""

from birthday import BirthdayCalculator
from datetime import date

def main():
    """Demonstrate BirthdayCalculator usage."""
    print("🎂 Coding Birthday - API Example 🎂")
    print("=" * 40)
    
    # Create calculator instance
    calculator = BirthdayCalculator()
    
    # Example data
    examples = [
        ("Alice", "1995-03-15"),
        ("Bob", "1988-12-25"),
        ("Charlie", "2000-09-29"),  # Today's date for demo
        ("Diana", "1992-07-04")
    ]
    
    for name, birth_date in examples:
        print(f"\n--- {name}'s Information ---")
        
        # Calculate age
        age = calculator.calculate_age(birth_date)
        print(f"Age: {age} years old")
        
        # Check if birthday is today
        is_today = calculator.is_birthday_today(birth_date)
        print(f"Birthday today: {'🎉 YES!' if is_today else 'No'}")
        
        # Days until birthday
        days_until = calculator.days_until_birthday(birth_date)
        print(f"Days until birthday: {days_until}")
        
        # Zodiac sign
        zodiac = calculator.get_zodiac_sign(birth_date)
        print(f"Zodiac sign: {zodiac}")
        
        # Personalized message
        message = calculator.get_birthday_message(name, birth_date)
        print(f"Message: {message}")
    
    print("\n" + "=" * 40)
    print("🎈 Example completed! 🎈")

if __name__ == "__main__":
    main()