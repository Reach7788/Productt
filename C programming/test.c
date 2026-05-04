
#include <stdio.h>
#include <string.h>

int main() {
    char user[50], password[50];
    char correctUser[] = "admin";
    char correctPassword[] = "1234";

    printf("Enter User: ");
    scanf("%s", user);
    printf("Enter Password: ");
    scanf("%s", password);
    if (strcmp(user, correctUser) != 0 && strcmp(password, correctPassword) != 0) {
        printf("Wrong User and Password\n");
    }
    else if (strcmp(user, correctUser) != 0) {
        printf("Wrong User\n");
    }
    else if (strcmp(password, correctPassword) != 0) {
        printf("Password is Incorrect\n");
    }
    else {
        printf("Congratulation\n");
    }

    return 0;
}
