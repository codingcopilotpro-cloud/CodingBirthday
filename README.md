# Coding Birthday 🎂

A fun and interactive birthday calculator and celebration app written in Python! Calculate ages, check if today is someone's birthday, find zodiac signs, and get personalized birthday messages.

## Features

- **Age Calculator**: Calculate current age from birth date
- **Birthday Checker**: Check if today is someone's birthday
- **Days Until Birthday**: Find out how many days until the next birthday
- **Zodiac Signs**: Get zodiac sign based on birth date
- **Personalized Messages**: Generate custom birthday messages
- **Interactive CLI**: Easy-to-use command-line interface

## Usage

### Running the Application

```bash
python3 birthday.py
```

### Example Usage

1. **Calculate Age and Birthday Info**:
   - Enter a name and birth date (YYYY-MM-DD format)
   - Get comprehensive birthday information including age, zodiac sign, and days until next birthday

2. **Check if Today is Someone's Birthday**:
   - Enter a name and birth date
   - Find out if today is their special day!

### Sample Output

```
🎂 Welcome to Coding Birthday! 🎂
========================================

--- Birthday Info for Alice ---
Birth Date: March 15, 1995
Current Age: 29 years old
Zodiac Sign: ♓ Pisces
Days until next birthday: 167
Message: 📅 Alice's birthday is in 167 days. They will be 30 years old.
```

## Testing

Run the test suite to verify functionality:

```bash
python3 test_birthday.py
```

## Requirements

- Python 3.6 or higher
- No external dependencies (uses only Python standard library)

## Project Structure

- `birthday.py` - Main application with BirthdayCalculator class and CLI interface
- `test_birthday.py` - Comprehensive test suite
- `requirements.txt` - Project dependencies (none required)
- `README.md` - This documentation

## Features in Detail

### BirthdayCalculator Class

The core `BirthdayCalculator` class provides:

- `calculate_age(birth_date)` - Calculate current age
- `is_birthday_today(birth_date)` - Check if today is the birthday
- `days_until_birthday(birth_date)` - Days until next birthday
- `get_birthday_message(name, birth_date)` - Personalized birthday message
- `get_zodiac_sign(birth_date)` - Zodiac sign calculation

### Supported Date Formats

- String format: "YYYY-MM-DD" (e.g., "1995-03-15")
- Python date objects

## Contributing

Feel free to contribute by:
- Adding new features
- Improving the user interface
- Adding more celebration messages
- Enhancing zodiac sign information

## License

This project is open source and available under the MIT License.
