def contains_duplicate(nums):
    nums.sort()

    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True
    return False


print(contains_duplicate([1, 2, 3, 1]))  # True
print(contains_duplicate([1, 2, 3, 4]))  # False
