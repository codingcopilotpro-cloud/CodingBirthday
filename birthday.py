#!/usr/bin/env python3
"""
Coding Birthday - A simple birthday calculator and celebration app
"""

from datetime import datetime, date
import calendar


class BirthdayCalculator:
    """A class to handle birthday-related calculations and celebrations."""
    
    def __init__(self):
        self.today = date.today()
    
    def calculate_age(self, birth_date):
        """Calculate age from birth date."""
        if isinstance(birth_date, str):
            birth_date = datetime.strptime(birth_date, "%Y-%m-%d").date()
        
        age = self.today.year - birth_date.year
        
        # Check if birthday has occurred this year
        if (self.today.month, self.today.day) < (birth_date.month, birth_date.day):
            age -= 1
        
        return age
    
    def is_birthday_today(self, birth_date):
        """Check if today is the person's birthday."""
        if isinstance(birth_date, str):
            birth_date = datetime.strptime(birth_date, "%Y-%m-%d").date()
        
        return (self.today.month == birth_date.month and 
                self.today.day == birth_date.day)
    
    def days_until_birthday(self, birth_date):
        """Calculate days until next birthday."""
        if isinstance(birth_date, str):
            birth_date = datetime.strptime(birth_date, "%Y-%m-%d").date()
        
        # Get this year's birthday
        this_year_birthday = birth_date.replace(year=self.today.year)
        
        # If birthday has passed this year, calculate for next year
        if this_year_birthday < self.today:
            next_birthday = birth_date.replace(year=self.today.year + 1)
        else:
            next_birthday = this_year_birthday
        
        delta = next_birthday - self.today
        return delta.days
    
    def get_birthday_message(self, name, birth_date):
        """Generate a personalized birthday message."""
        age = self.calculate_age(birth_date)
        
        if self.is_birthday_today(birth_date):
            return f"🎉 Happy Birthday, {name}! You are now {age} years old! 🎂"
        else:
            days_left = self.days_until_birthday(birth_date)
            if days_left == 1:
                return f"🎈 {name}'s birthday is tomorrow! They will be {age + 1} years old."
            else:
                return f"📅 {name}'s birthday is in {days_left} days. They will be {age + 1} years old."
    
    def get_zodiac_sign(self, birth_date):
        """Get zodiac sign based on birth date."""
        if isinstance(birth_date, str):
            birth_date = datetime.strptime(birth_date, "%Y-%m-%d").date()
        
        month = birth_date.month
        day = birth_date.day
        
        if (month == 3 and day >= 21) or (month == 4 and day <= 19):
            return "♈ Aries"
        elif (month == 4 and day >= 20) or (month == 5 and day <= 20):
            return "♉ Taurus"
        elif (month == 5 and day >= 21) or (month == 6 and day <= 20):
            return "♊ Gemini"
        elif (month == 6 and day >= 21) or (month == 7 and day <= 22):
            return "♋ Cancer"
        elif (month == 7 and day >= 23) or (month == 8 and day <= 22):
            return "♌ Leo"
        elif (month == 8 and day >= 23) or (month == 9 and day <= 22):
            return "♍ Virgo"
        elif (month == 9 and day >= 23) or (month == 10 and day <= 22):
            return "♎ Libra"
        elif (month == 10 and day >= 23) or (month == 11 and day <= 21):
            return "♏ Scorpio"
        elif (month == 11 and day >= 22) or (month == 12 and day <= 21):
            return "♐ Sagittarius"
        elif (month == 12 and day >= 22) or (month == 1 and day <= 19):
            return "♑ Capricorn"
        elif (month == 1 and day >= 20) or (month == 2 and day <= 18):
            return "♒ Aquarius"
        else:
            return "♓ Pisces"


def main():
    """Main function to run the birthday calculator."""
    print("🎂 Welcome to Coding Birthday! 🎂")
    print("=" * 40)
    
    calculator = BirthdayCalculator()
    
    while True:
        print("\nWhat would you like to do?")
        print("1. Calculate age and birthday info")
        print("2. Check if today is someone's birthday")
        print("3. Exit")
        
        choice = input("\nEnter your choice (1-3): ").strip()
        
        if choice == "1":
            name = input("Enter name: ").strip()
            birth_date_str = input("Enter birth date (YYYY-MM-DD): ").strip()
            
            try:
                birth_date = datetime.strptime(birth_date_str, "%Y-%m-%d").date()
                
                age = calculator.calculate_age(birth_date)
                days_until = calculator.days_until_birthday(birth_date)
                zodiac = calculator.get_zodiac_sign(birth_date)
                message = calculator.get_birthday_message(name, birth_date)
                
                print(f"\n--- Birthday Info for {name} ---")
                print(f"Birth Date: {birth_date.strftime('%B %d, %Y')}")
                print(f"Current Age: {age} years old")
                print(f"Zodiac Sign: {zodiac}")
                print(f"Days until next birthday: {days_until}")
                print(f"Message: {message}")
                
            except ValueError:
                print("❌ Invalid date format. Please use YYYY-MM-DD format.")
        
        elif choice == "2":
            name = input("Enter name: ").strip()
            birth_date_str = input("Enter birth date (YYYY-MM-DD): ").strip()
            
            try:
                if calculator.is_birthday_today(birth_date_str):
                    age = calculator.calculate_age(birth_date_str)
                    print(f"\n🎉 YES! Today is {name}'s birthday! They are {age} years old! 🎂")
                    print("🎈🎊 Happy Birthday! 🎊🎈")
                else:
                    days_until = calculator.days_until_birthday(birth_date_str)
                    print(f"\n📅 No, today is not {name}'s birthday.")
                    print(f"Their birthday is in {days_until} days.")
                
            except ValueError:
                print("❌ Invalid date format. Please use YYYY-MM-DD format.")
        
        elif choice == "3":
            print("\n👋 Thanks for using Coding Birthday! Have a great day!")
            break
        
        else:
            print("❌ Invalid choice. Please enter 1, 2, or 3.")


if __name__ == "__main__":
    main()