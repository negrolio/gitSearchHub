<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SearchReposController extends Controller
{
    private $client;

    /*
    * Github username
    *
    * @var string
    * */
    private $username;

    public function __construct(\Github\Client $client)
    {
        $this->client = $client;
        //$this->username = env('GITHUB_USERNAME');
    }

    public function searchRepo ($repo) {

        $reposApi = $this->client->api('search')->repositories($repo);
       
        $normalizedRepos = [];

        foreach ($reposApi['items'] as $repoApi) {
            array_push($normalizedRepos, [
                "name" => $repoApi['name'],
                "description" => $repoApi['description'],
                "url" => $repoApi['html_url']
                ]);
        }

        $localRepos = $this->findLocalRepos($repo);
        $allRepos = array_merge($normalizedRepos,$localRepos);
        return json_encode($allRepos);
    }

    private function checkMatch ($search, $repoName) {
        return strpos(strtolower($repoName), strtolower($search)) !== false;
    }

    public function findLocalRepos($search){
        $localReposPath = base_path() . "/localRepos";
        $scandirLocalRepos = scandir($localReposPath);
        $localReposArr = [];

        foreach($scandirLocalRepos as $element) {
            if ($element === "." || $element === '..' || !$this->checkMatch($search, $element)) {
                continue;
            }
            $repoName = $element;
            $repoDescription;
            $repoPath = $localReposPath . "/" . $element;

            $repo = scandir($repoPath);
            $isRepo = false;
            foreach($repo as $file) {
                if ($file === '.git') {
                    $isRepo = true;
                }
            }
            if ($isRepo === true){
                $repoDescription = file_get_contents($repoPath . "/.git/description");
            };
            array_push($localReposArr, [
                "name" => $repoName,
                "description" => $repoDescription,
                "url" => $repoPath
            ]);
        }
        return $localReposArr;
    }
}
