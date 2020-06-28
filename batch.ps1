$index = 1 
Dir | %{Rename-Item $_ -NewName ('tn_{0.}.(select Extension)' -f $index++)}