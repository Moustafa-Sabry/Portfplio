export interface ActivityData {
  title: string;
  subtitle: string;
  team: string;
  institution: string;
  period: string;
  solvedCount: string;
  platforms: {
    name: string;
    badge: string;
    focus: string;
  }[];
  pillars: {
    title: string;
    description: string;
  }[];
  algorithmSnippet: {
    title: string;
    language: string;
    code: string;
  };
}

export const activitiesData: ActivityData = {
  title: 'Problem Solving & Competitive Programming',
  subtitle: 'Continuous algorithmic practice and computational thinking',
  team: 'Modern Academy ECPC Team',
  institution: 'Modern Academy',
  period: '2022 – 2023',
  solvedCount: '150+',
  platforms: [
    {
      name: 'LeetCode',
      badge: 'Data Structures & Algorithms',
      focus: 'Hash Maps, Two Pointers, Trees, Dynamic Programming',
    },
    {
      name: 'Codeforces',
      badge: 'Competitive Contests',
      focus: 'Speed problem-solving, edge-case analysis, time limits',
    },
    {
      name: 'HackerRank',
      badge: 'Algorithm Challenges',
      focus: 'Implementation patterns, recursion, sorting, search',
    },
  ],
  pillars: [
    {
      title: 'Data Structures',
      description:
        'Practical proficiency with Arrays, Hash Maps, Linked Lists, Stacks, Queues, and Binary Trees for low-overhead memory operations.',
    },
    {
      title: 'Algorithms',
      description:
        'Mastery of Search (Binary Search, BFS/DFS), Sorting, Greedy heuristics, and Recursion to solve structured problems.',
    },
    {
      title: 'Problem Solving',
      description:
        'Systematic decomposition of complex requirements into verifiable, testable algorithmic steps under constraints.',
    },
    {
      title: 'Performance Optimization',
      description:
        'Asymptotic Big-O time and space complexity evaluation to guarantee efficient runtime scaling for high-throughput endpoints.',
    },
  ],
  algorithmSnippet: {
    title: 'Time & Space Efficient Two-Sum (Hash Table Approach)',
    language: 'typescript',
    code: `// Time: O(n) | Space: O(n)
function twoSum(nums: number[], target: number): [number, number] | null {
  const indexMap = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (indexMap.has(complement)) {
      return [indexMap.get(complement)!, i];
    }
    indexMap.set(nums[i], i);
  }
  
  return null; // No match found within constraints
}`,
  },
};
