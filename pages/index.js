import { nanoid } from "nanoid";
import * as React from "react";
import { Box } from "../components/box";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Input } from "../components/input";
import { Page } from "../components/page";
import { Text } from "../components/text";

const GoalCard = ({ ...props }) => {
  return (
    <Box
      bg={"surface"}
      borderColor={"borders"}
      borderWidth={1}
      borderStyle={"solid"}
      borderRadius={1}
      p={2}
      px={3}
      {...props}
    />
  );
};

const STORAGE_TOKEN = "goalist_data";

const updateStorage = (data = "{}") => {
  localStorage.setItem(STORAGE_TOKEN, JSON.stringify(data));
};
const readStorage = () => {
  const data = localStorage.getItem(STORAGE_TOKEN);
  return JSON.parse(data);
};

export default function Home() {
  let $existingGoals = [];
  let $newGoalErrors = [];
  let $showAdd = false;
  let $amountToAdd = null;
  let $newGoal = {
    name: "",
    amount: 0,
  };

  React.useEffect(() => {
    const data = readStorage();
    $existingGoals = data;
  }, []);

  React.useEffect(() => {
    updateStorage($existingGoals);
  }, [$existingGoals]);

  const onSave = () => {
    $newGoalErrors = [];
    if (!$newGoal.name) {
      $newGoalErrors = $newGoalErrors.concat("Name cannot be empty");
      return;
    }

    if (isNaN($newGoal.amount) || parseInt($newGoal.amount, 10) <= 0) {
      $newGoalErrors = $newGoalErrors.concat(
        "Amount needs to be a valid number and greater than 0"
      );
      return;
    }

    $newGoalErrors = $newGoalErrors.concat();

    $existingGoals = $existingGoals.concat({
      ...$newGoal,
      id: nanoid(),
    });

    $newGoal = {
      name: "",
      amount: 0,
    };
    $showAdd = false;
  };

  const onAddToGoal = (goal) => {
    $amountToAdd = 0;
    $existingGoals = $existingGoals.map((g) => {
      g.addAmount = false;
      if (g.id === goal.id) {
        g.addAmount = true;
      }
      return g;
    });
  };

  const onSaveForGoal = (goal) => {
    $existingGoals = $existingGoals.map((g) => {
      g.addAmount = false;
      if (g.id === goal.id) {
        g.achievedAmount = (g.achievedAmount || 0) + parseInt($amountToAdd, 10);
      }
      return g;
    });
    $amountToAdd = 0;
  };

  const deleteGoal = (goal) => {
    $existingGoals = $existingGoals.filter((g) => g.id !== goal.id);
  };

  return (
    <Page>
      <Text fontSize={6} textAlign="center">
        Goalist
      </Text>
      <Button
        my={3}
        ml={"auto"}
        maxWidth={"250px"}
        onClick={() => {
          $showAdd = true;
        }}
      >
        Add new goal
      </Button>
      {$showAdd ? (
        <Card p={10} my={2}>
          <Box display="flex" flexWrap="wrap" flexDirection="column">
            <Text m={2} fontSize={3}>
              New Goal
            </Text>
            <Input
              m={1}
              mt={2}
              placeholder="Name of the goal"
              value={$newGoal.name}
              onChange={(e) => {
                $newGoal = Object.assign({}, $newGoal, {
                  name: e.target.value,
                });
              }}
            />
            <Input
              m={1}
              mt={2}
              placeholder="Target Amount"
              value={$newGoal.amount}
              onChange={(e) => {
                $newGoal = Object.assign({}, $newGoal, {
                  amount: e.target.value,
                });
              }}
            />
            {$newGoalErrors.map((x) => (
              <Text mode="danger">{x}</Text>
            ))}
            <Box
              m={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button
                m={1}
                mode="danger"
                onClick={() => {
                  $showAdd = false;
                }}
              >
                Cancel
              </Button>
              <Button m={1} onClick={onSave}>
                Save
              </Button>
            </Box>
          </Box>
        </Card>
      ) : null}
      {$existingGoals.map((goal) => {
        return (
          <GoalCard mb={2}>
            <Box
              display="flex"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Text>{goal.name}</Text>
              <Text>
                Achieved Amount: {goal.achievedAmount || 0}/{goal.amount}
              </Text>
              {!goal.addAmount ? (
                <Box display="flex">
                  <Button
                    m={1}
                    mode="secondary"
                    onClick={() => onAddToGoal(goal)}
                  >
                    Add to goal
                  </Button>
                  <Button m={1} mode="danger" onClick={() => deleteGoal(goal)}>
                    Delete
                  </Button>
                </Box>
              ) : (
                <Button mode="primary" onClick={() => onSaveForGoal(goal)}>
                  Save
                </Button>
              )}
            </Box>
            <Box display="flex">
              {goal.addAmount ? (
                <Input
                  width={"100%"}
                  placeholder="Amount achieved"
                  value={$amountToAdd}
                  onChange={(e) => {
                    $amountToAdd = e.target.value;
                  }}
                />
              ) : null}
            </Box>
          </GoalCard>
        );
      })}
    </Page>
  );
}
